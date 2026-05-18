/**
 * Optimize all raster images under public/images/products to web-friendly PNGs.
 * One output per basename (e.g. etgjh.jpg + etgjh.png → etgjh.png).
 * Run: npm run optimize-product-pngs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "images", "products");

const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const SOURCE_PRIORITY = [".jpg", ".jpeg", ".webp", ".png"];

function maxEdgeFor(relPath, base) {
  const lower = base.toLowerCase();
  if (lower.includes("ul-listed")) return 512;
  if (lower.includes("-hero")) return 1024;
  if (relPath.includes("corrugated/")) return 800;
  return 960;
}

function pickSource(candidates) {
  for (const ext of SOURCE_PRIORITY) {
    const hit = candidates.find((c) => c.ext === ext);
    if (hit) return hit.path;
  }
  return candidates[0].path;
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

async function optimizeToPng(srcPath, destPath) {
  const buf = await fs.readFile(srcPath);
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const rel = path.relative(ROOT, srcPath).replace(/\\/g, "/");
  const base = path.basename(srcPath);
  const maxEdge = maxEdgeFor(rel, base);
  const longest = Math.max(w, h);
  const hasAlpha = meta.hasAlpha === true;
  const isUlListed = base.toLowerCase().includes("ul-listed");

  let pipeline = sharp(buf).rotate();
  if (longest > maxEdge) {
    pipeline = pipeline.resize({
      width: w >= h ? maxEdge : undefined,
      height: h > w ? maxEdge : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (hasAlpha && !isUlListed) {
    pipeline = pipeline.flatten({ background: "#f6f6f7" });
  }

  // UL mark: keep alpha; WebP source is usually smaller than PNG for this asset.
  if (isUlListed) {
    const out = await pipeline.png({ compressionLevel: 9 }).toBuffer();
    await fs.writeFile(destPath, out);
    return { before: buf.length, after: out.length, skippedUl: true };
  }

  const usePalette = true;
  const out = await pipeline
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      ...(usePalette ? { palette: true, colors: 128, quality: 80 } : {}),
    })
    .toBuffer();

  await fs.writeFile(destPath, out);
  return { before: buf.length, after: out.length };
}

const files = await walk(ROOT);
/** destPath -> candidate sources */
const groups = new Map();

for (const filePath of files) {
  const ext = path.extname(filePath).toLowerCase();
  if (!RASTER.has(ext)) continue;

  const dir = path.dirname(filePath);
  const stem = path.basename(filePath, ext);
  const destPath = path.join(dir, `${stem}.png`);

  if (!groups.has(destPath)) groups.set(destPath, []);
  groups.get(destPath).push({ path: filePath, ext });
}

let saved = 0;
let count = 0;

for (const [destPath, candidates] of groups) {
  const base = path.basename(destPath, ".png");
  if (base.toLowerCase().includes("ul-listed")) {
    console.log("skip", path.relative(ROOT, destPath), "(keep existing .webp)");
    continue;
  }

  const srcPath = pickSource(candidates);
  const rel = path.relative(ROOT, destPath);
  try {
    const r = await optimizeToPng(srcPath, destPath);
    count++;
    saved += r.before - r.after;
    console.log(
      rel,
      `(${path.basename(srcPath)})`,
      r.before,
      "->",
      r.after,
    );
  } catch (e) {
    console.error("fail", rel, e.message);
  }
}

console.log(
  `\ndone: ${count} PNGs written, ~${Math.round(saved / 1024)} KB saved`,
);
