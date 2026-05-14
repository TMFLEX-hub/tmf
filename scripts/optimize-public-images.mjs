/**
 * One-shot / repeatable: shrink images under public/images for web delivery.
 * Run: node scripts/optimize-public-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "images");
const MAX_JPEG_EDGE = 1920;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 88;

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

async function optimizeJpeg(filePath) {
  const buf = await fs.readFile(filePath);
  const meta = await sharp(buf).metadata();
  if (meta.format !== "jpeg" && meta.format !== "jpg") {
    return { filePath, skipped: `not jpeg (${meta.format})` };
  }
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const longest = Math.max(w, h);
  let pipeline = sharp(buf).rotate();
  if (longest > MAX_JPEG_EDGE) {
    pipeline = pipeline.resize({
      width: w >= h ? MAX_JPEG_EDGE : undefined,
      height: h > w ? MAX_JPEG_EDGE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }
  const out = await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();
  if (out.length >= buf.length * 0.98 && longest <= MAX_JPEG_EDGE) {
    return { filePath, skipped: "already small" };
  }
  await fs.writeFile(filePath, out);
  return {
    filePath,
    before: buf.length,
    after: out.length,
  };
}

async function toWebp(srcPath, destPath, removeSrc) {
  const buf = await fs.readFile(srcPath);
  const out = await sharp(buf)
    .rotate()
    .webp({ quality: WEBP_QUALITY, alphaQuality: 100, effort: 6 })
    .toBuffer();
  await fs.writeFile(destPath, out);
  if (removeSrc && path.resolve(srcPath) !== path.resolve(destPath)) {
    await fs.unlink(srcPath);
  }
  return { srcPath, destPath, before: buf.length, after: out.length };
}

const files = await walk(ROOT);

// 1) Misnamed ul-listed (PNG bytes as .jpg) -> .webp
const ulListed = path.join(
  ROOT,
  "products/explosion-proof/ul-listed.jpg",
);
try {
  await fs.access(ulListed);
  const dest = path.join(ROOT, "products/explosion-proof/ul-listed.webp");
  const r = await toWebp(ulListed, dest, true);
  console.log("ul-listed:", r.before, "->", r.after, "bytes");
} catch {
  /* already migrated */
}

// 2) Large hero PNGs -> webp (alpha)
for (const name of ["etgjh-ss-hero.png", "etlk-hero.png"]) {
  const src = path.join(ROOT, "products/explosion-proof", name);
  try {
    await fs.access(src);
    const dest = src.replace(/\.png$/i, ".webp");
    const r = await toWebp(src, dest, true);
    console.log(name, r.before, "->", r.after);
  } catch {
    /* gone */
  }
}

// 3) Corrugated hose PNGs -> webp
for (const name of ["N-TypeCorrugatedMetalHose.png", "P-TypeCorrugatedMetalHose.png"]) {
  const src = path.join(ROOT, name);
  try {
    await fs.access(src);
    const dest = src.replace(/\.png$/i, ".webp");
    const r = await toWebp(src, dest, true);
    console.log(name, r.before, "->", r.after);
  } catch {
    /* gone */
  }
}

// 4) All JPEGs under public/images: resize + mozjpeg
const jpegFiles = files.filter((f) => /\.jpe?g$/i.test(f));
const results = [];
for (const f of jpegFiles) {
  try {
    await fs.access(f);
    results.push(await optimizeJpeg(f));
  } catch (e) {
    if (e.code !== "ENOENT") console.error("fail", f, e.message);
  }
}
for (const r of results) {
  if (r.skipped) continue;
  if (r.before && r.after) {
    console.log(
      "jpeg",
      path.relative(ROOT, r.filePath),
      r.before,
      "->",
      r.after,
    );
  }
}

console.log("done");
