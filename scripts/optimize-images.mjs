#!/usr/bin/env node
/**
 * optimize-images.mjs — one-shot / re-runnable image optimizer for public/images.
 *
 * Why: everything under public/ ships byte-for-byte (Astro never touches it),
 * and the originals were camera/AI exports — multi-MB PNG photos and
 * high-quality JPEGs. Most are referenced as plain string paths from data
 * files and CSS background-image rules, so converting every usage to
 * astro:assets <Image> would be a large refactor. Instead this script:
 *
 *   1. Re-encodes raster photos (png/jpg/jpeg) to WebP at quality 80,
 *      capped at 2400px on the long edge (no upscaling). Images with real
 *      transparency use lossless WebP when that's compact (logos stay
 *      pixel-crisp), otherwise lossy WebP with full-quality alpha.
 *   2. Leaves small transparent PNGs (< 60 KB, i.e. logos/icons) untouched.
 *   3. Re-encodes existing .webp files in place only when they're oversized.
 *   4. Rewrites every literal "/images/…ext" reference in src/ to the new
 *      .webp path and deletes the original (pass --keep to keep originals,
 *      --dry to only report).
 *
 * Idempotent: running it again only touches new/unoptimized files, so run
 * `npm run optimize:images` after adding images.
 */
import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync, renameSync, existsSync } from 'node:fs';
import { join, relative, extname, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const IMAGES = join(PUBLIC, 'images');
const SRC = join(ROOT, 'src');

const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry');
const KEEP = args.has('--keep');

const MAX_DIM = 2400;
const QUALITY = 80;
const SMALL_LOGO_BYTES = 60 * 1024;
const WEBP_REENCODE_BYTES = 400 * 1024;

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const toPublicPath = (abs) => '/' + relative(PUBLIC, abs).split(sep).join('/');
const kb = (n) => `${Math.round(n / 1024)} KB`;

const resize = (img, meta) =>
  Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_DIM
    ? img.resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
    : img;

async function encode(file) {
  const input = readFileSync(file);
  const meta = await sharp(input).metadata();
  let transparent = false;
  if (meta.hasAlpha) transparent = !(await sharp(input).stats()).isOpaque;

  if (transparent) {
    const lossless = await resize(sharp(input), meta).webp({ lossless: true, effort: 6 }).toBuffer();
    if (lossless.length < 150 * 1024) return { buf: lossless, mode: 'lossless' };
    const lossy = await resize(sharp(input), meta)
      .webp({ quality: 85, alphaQuality: 100, effort: 5, smartSubsample: true })
      .toBuffer();
    return { buf: lossy, mode: 'lossy+alpha' };
  }
  const buf = await resize(sharp(input), meta)
    .removeAlpha()
    .webp({ quality: QUALITY, effort: 5, smartSubsample: true })
    .toBuffer();
  return { buf, mode: 'lossy' };
}

const files = walk(IMAGES).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
const renames = new Map(); // old public path -> new public path
let before = 0;
let after = 0;

for (const file of files) {
  const size = statSync(file).size;
  const ext = extname(file).toLowerCase();
  const pub = toPublicPath(file);

  if (ext === '.webp') {
    const meta = await sharp(file).metadata();
    if (size < WEBP_REENCODE_BYTES && Math.max(meta.width, meta.height) <= MAX_DIM) continue;
    const { buf } = await encode(file);
    if (buf.length >= size * 0.9) continue;
    before += size;
    after += buf.length;
    console.log(`re-encode ${pub}  ${kb(size)} -> ${kb(buf.length)}`);
    if (!DRY) writeFileSync(file, buf);
    continue;
  }

  const meta = await sharp(file).metadata();
  if (size < SMALL_LOGO_BYTES && meta.hasAlpha) continue; // crisp small logos: leave as-is

  const { buf, mode } = await encode(file);
  if (buf.length >= size) continue; // no win — keep the original

  const outAbs = file.slice(0, -ext.length) + '.webp';
  if (existsSync(outAbs)) {
    console.warn(`skip ${pub}: ${toPublicPath(outAbs)} already exists`);
    continue;
  }
  before += size;
  after += buf.length;
  renames.set(pub, toPublicPath(outAbs));
  console.log(`${mode.padEnd(11)} ${pub}  ${kb(size)} -> ${kb(buf.length)}`);
  if (!DRY) {
    writeFileSync(outAbs, buf);
    if (!KEEP) unlinkSync(file);
  }
}

// Rewrite literal references in src/.
let touched = 0;
if (renames.size && !DRY) {
  const textFiles = walk(SRC).filter((f) => /\.(astro|ts|tsx|js|mjs|md|mdx|css|json)$/i.test(f));
  for (const f of textFiles) {
    const orig = readFileSync(f, 'utf8');
    let next = orig;
    for (const [from, to] of renames) {
      if (next.includes(from)) next = next.split(from).join(to);
    }
    if (next !== orig) {
      writeFileSync(f, next);
      touched++;
    }
  }
}

console.log(
  `\n${renames.size} converted, ${touched} source files updated. ` +
    `Processed bytes: ${kb(before)} -> ${kb(after)}${DRY ? ' (dry run)' : ''}`
);
