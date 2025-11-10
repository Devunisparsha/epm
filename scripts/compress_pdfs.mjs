// scripts/compress-media.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const exec = promisify(execFile);

function getGsCommand() {
  return process.platform === "win32" ? "gswin64c" : "gs";
}

async function* walk(dir, extensions) {
  for (const dirent of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* walk(res, extensions);
    } else if (dirent.isFile()) {
      const ext = path.extname(res).toLowerCase();
      if (extensions.includes(ext)) {
        yield res;
      }
    }
  }
}

function formatSize(bytes) {
  const kb = bytes / 1024;
  return kb > 1024 ? `${(kb / 1024).toFixed(2)} MB` : `${kb.toFixed(1)} KB`;
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

  const before = (await fs.stat(src)).size;
  const after = (await fs.stat(dst)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);

  console.log(
    `✅ (WebP) ${path.basename(src)} | ${formatSize(before)} → ${formatSize(after)} (${saved}% saved)`,
  );
}

async function runGhostscript(inputFile, outputFile, argsExtra = []) {
  const gsCmd = getGsCommand();
  const args = [
    "-sDEVICE=pdfwrite",
    "-dCompatibilityLevel=1.4",
    "-dNOPAUSE",
    "-dQUIET",
    "-dBATCH",
    `-sOutputFile=${outputFile}`,
    ...argsExtra,
    inputFile,
  ];
  await exec(gsCmd, args);
}

async function compressPDF(inputFile, outputFile, maxSizeMB = 5) {
  const before = (await fs.stat(inputFile)).size;
  let after = before;

  const strategies = [
    { name: "ebook", args: ["-dPDFSETTINGS=/ebook"] },
    { name: "screen", args: ["-dPDFSETTINGS=/screen"] },
  ];

  const dpis = [150, 96, 72, 50];
  for (const dpi of dpis) {
    strategies.push({
      name: `downsample-${dpi}dpi`,
      args: [
        "-dPDFSETTINGS=/default",
        "-dColorImageDownsampleType=/Bicubic",
        `-dColorImageResolution=${dpi}`,
        "-dGrayImageDownsampleType=/Bicubic",
        `-dGrayImageResolution=${dpi}`,
        "-dMonoImageDownsampleType=/Subsample",
        `-dMonoImageResolution=${dpi}`,
      ],
    });
  }

  let chosenStrategyName = null;
  let currentInputForNextPass = inputFile;

  for (let i = 0; i < strategies.length; i++) {
    const strat = strategies[i];
    const currentOutputFile =
      i === strategies.length - 1 || after / 1024 / 1024 <= maxSizeMB
        ? outputFile
        : path.join(
            path.dirname(outputFile),
            `temp_${path.basename(outputFile)}`,
          );

    try {
      await runGhostscript(
        currentInputForNextPass,
        currentOutputFile,
        strat.args,
      );
      after = (await fs.stat(currentOutputFile)).size;
      chosenStrategyName = strat.name;

      console.log(
        `   ⚙️ ${strat.name}: ${formatSize(before)} → ${formatSize(after)}`,
      );

      if (after / 1024 / 1024 <= maxSizeMB) {
        if (currentOutputFile !== outputFile) {
          await fs.rename(currentOutputFile, outputFile);
        }
        break;
      }

      if (i < strategies.length - 1) {
        currentInputForNextPass = currentOutputFile;
      }
    } catch (err) {
      console.error(
        `Error with strategy ${strat.name} for ${inputFile}: ${err.message}`,
      );
      currentInputForNextPass = inputFile;
      if (
        currentOutputFile !== outputFile &&
        (await fs
          .access(currentOutputFile)
          .then(() => true)
          .catch(() => false))
      ) {
        await fs.unlink(currentOutputFile);
      }
    }
  }

  const finalOutputExists = await fs
    .access(outputFile)
    .then(() => true)
    .catch(() => false);
  if (
    !finalOutputExists &&
    currentInputForNextPass !== inputFile &&
    (await fs
      .access(currentInputForNextPass)
      .then(() => true)
      .catch(() => false))
  ) {
    await fs.rename(currentInputForNextPass, outputFile);
    after = (await fs.stat(outputFile)).size;
  } else if (!finalOutputExists) {
    after = before;
  }

  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `✅ (PDF) ${path.basename(inputFile)} | ${formatSize(before)} → ${formatSize(after)} (${saved}% saved) [${chosenStrategyName || "no strategy applied"}]`,
  );

  if (after / 1024 / 1024 > maxSizeMB) {
    console.warn(
      `⚠️ Still above ${maxSizeMB} MB: ${path.basename(inputFile)} (${formatSize(after)})`,
    );
  }

  const tempFileBase = path.join(
    path.dirname(outputFile),
    `temp_${path.basename(outputFile)}`,
  );
  if (
    await fs
      .access(tempFileBase)
      .then(() => true)
      .catch(() => false)
  ) {
    await fs
      .unlink(tempFileBase)
      .catch((e) =>
        console.error(`Error deleting temp file ${tempFileBase}: ${e.message}`),
      );
  }
}

async function run({
  input,
  output,
  overwrite = false,
  pdfMaxSizeMB = 5,
  webpQuality = 70,
  webpLossless = false,
  webpMaxWidth,
  webpMaxHeight,
}) {
  const inAbs = path.resolve(input);
  const outAbs = path.resolve(output);

  console.log(`🔍 Scanning: ${inAbs}`);
  console.log(`📂 Output to: ${outAbs}`);
  console.log(`--- PDF Settings ---`);
  console.log(`📏 Max PDF size: ${pdfMaxSizeMB} MB`);
  console.log(`--- WebP Settings ---`);
  console.log(`⚙️ WebP Quality: ${webpQuality}, Lossless: ${webpLossless}`);
  if (webpMaxWidth || webpMaxHeight) {
    console.log(
      `📐 Max WebP dimensions: ${webpMaxWidth || "∞"}x${webpMaxHeight || "∞"}`,
    );
  }
  console.log(`---------------------`);

  let count = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  const supportedExtensions = [".pdf", ".webp"];

  for await (const src of walk(inAbs, supportedExtensions)) {
    const rel = path.relative(inAbs, src);
    const ext = path.extname(src).toLowerCase();
    const dst = path.join(outAbs, rel);

    await fs.mkdir(path.dirname(dst), { recursive: true });

    if (!overwrite) {
      try {
        await fs.access(dst);
        console.log(`⏭️ Skipped (exists): ${dst}`);
        continue;
      } catch {}
    }

    const before = (await fs.stat(src)).size;

    try {
      if (ext === ".webp") {
        await compressImage(src, dst, {
          quality: webpQuality,
          lossless: webpLossless,
          maxWidth: webpMaxWidth,
          maxHeight: webpMaxHeight,
        });
      } else if (ext === ".pdf") {
        await compressPDF(src, dst, pdfMaxSizeMB);
      }
      const after = (await fs.stat(dst)).size;
      totalBefore += before;
      totalAfter += after;
      count++;
    } catch (e) {
      console.error(`❌ Error processing ${src} (${e.message})`);
    }
  }

  const totalSaved = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(
    1,
  );
  console.log(
    `\n✨ Done! Processed ${count} media file(s). Total: ${formatSize(totalBefore)} → ${formatSize(totalAfter)} (${totalSaved}% saved)`,
  );
}

const args = process.argv.slice(2);
const options = {
  input: args[0] || "public/",
  output: args[1] || "public_compressed_media",
  overwrite: args.includes("--overwrite"),

  pdfMaxSizeMB: 5,
  webpQuality: 70,
  webpLossless: args.includes("--webp-lossless"),
  webpMaxWidth: undefined,
  webpMaxHeight: undefined,
};

args.forEach((arg) => {
  if (arg.startsWith("--pdf-max-size=")) {
    options.pdfMaxSizeMB = parseFloat(arg.split("=")[1]);
  } else if (arg.startsWith("--webp-q=")) {
    options.webpQuality = parseInt(arg.split("=")[1]);
  } else if (arg.startsWith("--webp-w=")) {
    options.webpMaxWidth = parseInt(arg.split("=")[1]);
  } else if (arg.startsWith("--webp-h=")) {
    options.webpMaxHeight = parseInt(arg.split("=")[1]);
  }
});

run(options).catch((err) => {
  console.error("🚨 Fatal error:", err);
  process.exit(1);
});
