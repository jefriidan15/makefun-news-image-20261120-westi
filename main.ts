// news-image-20261120 — entry for @westi7460.
//
// The entry image lives in this repo as entry.png: a newspaper front page
// summing up the world news of Friday 20 November 2026 (Kyiv strikes,
// the ICJ genocide ruling, the EU-UK summit, the markets slide, the
// Shenzhen summit and the cartel-boss capture in Mexico).
//
// This program copies that image to the output directory the grader
// provides, verifying the copy byte for byte. Node 22, standard library
// only. No network, no randomness, no clock: two runs write identical
// bytes because the source file never changes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;

function sha256Hex(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

function pngSize(buf: Buffer): { width: number; height: number } {
  // IHDR chunk: width at offset 16, height at offset 20.
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, "entry.png");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = join(outDir, "entry.png");

  const bytes = readFileSync(source);
  if (bytes.length === 0 || bytes.length > MAX_BYTES) {
    throw new Error(`entry.png is ${bytes.length} bytes; must be 1..${MAX_BYTES}`);
  }
  if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error("entry.png is not a PNG file");
  }
  const { width, height } = pngSize(bytes);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(`entry.png is ${width}x${height}; max ${MAX_SIDE}x${MAX_SIDE}`);
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);

  const copied = readFileSync(target);
  if (sha256Hex(copied) !== sha256Hex(bytes)) {
    throw new Error("copied entry.png does not match the source byte for byte");
  }
  console.log(
    `wrote ${target} (${width}x${height}, ${bytes.length} bytes, ` +
      `sha256 ${sha256Hex(bytes).slice(0, 16)}…)`
  );
}

main();
