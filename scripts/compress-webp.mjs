// scripts/compress-webp.mjs
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function* walk(dir) {
  for (const dirent of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) yield* walk(res);
    else if (dirent.isFile() && res.toLowerCase().endsWith(".webp")) yield res;
  }
}

// Format size in KB/MB
async function getFileSize(file) {
  try {
    const stats = await fs.stat(file);
    const size = stats.size / 1024;
    return size > 1024
      ? `${(size / 1024).toFixed(2)} MB`
      : `${size.toFixed(1)} KB`;
  } catch {
    return "N/A";
  }
}

async function compressImage(src, dst, options) {
  let img = sharp(src);

  if (options.maxWidth || options.maxHeight) {
    img = img.resize({
      width: options.maxWidth,
      height: options.maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await img
    .webp({ quality: options.quality, lossless: options.lossless })
    .toFile(dst);

  const before = await getFileSize(src);
  const after = await getFileSize(dst);

  console.log(
    `✅ ${path.basename(src)} → ${path.basename(dst)} | ${before} → ${after}`
  );
}

async function run({
  input,
  output,
  quality = 75,
  lossless = false,
  maxWidth,
  maxHeight,
  overwrite = false,
}) {
  const inAbs = path.resolve(input);
  const outAbs = path.resolve(output);

  console.log(`🔍 Scanning: ${inAbs}`);
  console.log(`📂 Output to: ${outAbs}`);
  console.log(`⚙️ Quality: ${quality}, Lossless: ${lossless}`);
  if (maxWidth || maxHeight) {
    console.log(`📐 Max dimensions: ${maxWidth || "∞"}x${maxHeight || "∞"}`);
  }

  let count = 0;
  for await (const src of walk(inAbs)) {
    const rel = path.relative(inAbs, src);
    const dst = path.join(outAbs, rel);

    await fs.mkdir(path.dirname(dst), { recursive: true });

    try {
      if (!overwrite) {
        try {
          await fs.access(dst);
          console.log(`⏭️ Skipped (exists): ${dst}`);
          continue;
        } catch {}
      }

      await compressImage(src, dst, { quality, lossless, maxWidth, maxHeight });
      count++;
    } catch (e) {
      console.error(`❌ Error: ${src} (${e.message})`);
    }
  }

  console.log(`\n✨ Done! Processed ${count} image(s).`);
}

// --- Run with defaults or CLI args ---
const args = process.argv.slice(2);
const options = {
  input: args[0] || "public/",
  output: args[1] || "public_compressed",
  quality: parseInt(args.find((a) => a.startsWith("--q="))?.split("=")[1]) || 70,
  lossless: args.includes("--lossless"),
  overwrite: args.includes("--overwrite"),
  maxWidth: parseInt(args.find((a) => a.startsWith("--w="))?.split("=")[1]),
  maxHeight: parseInt(args.find((a) => a.startsWith("--h="))?.split("=")[1]),
};

run(options).catch((err) => {
  console.error("🚨 Fatal error:", err);
  process.exit(1);
});
