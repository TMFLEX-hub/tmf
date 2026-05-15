/**
 * Shrink all raster images under public/images for web delivery.
 * Run: npm run optimize-images
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "images");

const JPEG_QUALITY = 78;
const WEBP_QUALITY = 78;
const SKIP_IF_UNDER_BYTES = 100_000;
const PNG_COMPRESSION = 9;

/** Max longest edge by use case (inferred from path/name). */
function maxEdgeFor(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
  const base = path.basename(filePath).toLowerCase();

  if (base.includes("ul-listed")) return 512;
  if (base.includes("corner") || rel.includes("certificate")) return 1200;
  if (
    base.includes("n-typecorrugated") ||
    base.includes("p-typecorrugated")
  ) {
    return 960;
  }
  if (rel.includes("products/corrugated/")) return 800;
  if (base.includes("-hero.") || base.endsWith("-hero.webp")) return 1280;
  if (rel.includes("products/explosion-proof/")) return 1536;
  if (base.startsWith("homepage") || base.startsWith("hero")) return 1600;
  if (rel.includes("1tmf") || rel.includes("2tmf") || rel.includes("3tmf")) {
    return 1200;
  }
  return 1920;
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function resizeInside(pipeline, w, h, maxEdge) {
  const longest = Math.max(w, h);
  if (longest <= maxEdge) return pipeline;
  return pipeline.resize({
    width: w >= h ? maxEdge : undefined,
    height: h > w ? maxEdge : undefined,
    fit: "inside",
    withoutEnlargement: true,
  });
}

async function optimizeJpeg(filePath) {
  const buf = await fs.readFile(filePath);
  const meta = await sharp(buf).metadata();
  if (meta.format !== "jpeg" && meta.format !== "jpg") {
    return { skipped: `not jpeg (${meta.format})` };
  }
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const maxEdge = maxEdgeFor(filePath);
  const out = await resizeInside(sharp(buf).rotate(), w, h, maxEdge)
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();
  if (
    buf.length < SKIP_IF_UNDER_BYTES &&
    out.length >= buf.length * 0.97 &&
    Math.max(w, h) <= maxEdge
  ) {
    return { skipped: "already small" };
  }
  await fs.writeFile(filePath, out);
  return { before: buf.length, after: out.length };
}

async function optimizeWebp(filePath) {
  const buf = await fs.readFile(filePath);
  const meta = await sharp(buf).metadata();
  if (meta.format !== "webp") return { skipped: `not webp (${meta.format})` };
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const maxEdge = maxEdgeFor(filePath);
  const hasAlpha = meta.hasAlpha === true;
  const out = await resizeInside(sharp(buf).rotate(), w, h, maxEdge)
    .webp({
      quality: WEBP_QUALITY,
      alphaQuality: hasAlpha ? 90 : undefined,
      effort: 6,
    })
    .toBuffer();
  if (
    buf.length < SKIP_IF_UNDER_BYTES &&
    out.length >= buf.length * 0.97 &&
    Math.max(w, h) <= maxEdge
  ) {
    return { skipped: "already small" };
  }
  await fs.writeFile(filePath, out);
  return { before: buf.length, after: out.length };
}

async function optimizePng(filePath) {
  const buf = await fs.readFile(filePath);
  const meta = await sharp(buf).metadata();
  if (meta.format !== "png") return { skipped: `not png (${meta.format})` };
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const maxEdge = maxEdgeFor(filePath);
  const hasAlpha = meta.hasAlpha === true;

  let pipeline = resizeInside(sharp(buf).rotate(), w, h, maxEdge);
  if (hasAlpha) {
    pipeline = pipeline.png({
      compressionLevel: PNG_COMPRESSION,
      adaptiveFiltering: true,
      palette: w * h < 900_000,
    });
  } else {
    pipeline = pipeline.png({
      compressionLevel: PNG_COMPRESSION,
      adaptiveFiltering: true,
    });
  }

  const out = await pipeline.toBuffer();
  if (
    buf.length < SKIP_IF_UNDER_BYTES &&
    out.length >= buf.length * 0.97 &&
    Math.max(w, h) <= maxEdge
  ) {
    return { skipped: "already small" };
  }
  await fs.writeFile(filePath, out);
  return { before: buf.length, after: out.length };
}

const files = await walk(ROOT);
let saved = 0;
let processed = 0;

for (const filePath of files.sort()) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;

  let result;
  try {
    if (ext === ".webp") result = await optimizeWebp(filePath);
    else if (ext === ".png") result = await optimizePng(filePath);
    else result = await optimizeJpeg(filePath);
  } catch (e) {
    console.error("fail", path.relative(ROOT, filePath), e.message);
    continue;
  }

  const rel = path.relative(ROOT, filePath);
  if (result.skipped) {
    console.log("skip", rel, result.skipped);
    continue;
  }
  if (result.before != null) {
    processed++;
    saved += result.before - result.after;
    console.log(rel, result.before, "->", result.after);
  }
}

console.log(
  `\ndone: ${processed} files updated, ~${Math.round(saved / 1024)} KB saved`,
);
