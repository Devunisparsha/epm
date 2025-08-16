const fs = require("fs");
const path = require("path");
const zlib = require("zlib"); // Node.js built-in compression module

/**
 * Compresses a single file using Gzip.
 * @param {string} inputFilePath - The full path to the input file.
 * @param {string} outputFilePath - The full path where the compressed file should be saved (without .gz extension).
 * @returns {Promise<void>} A promise that resolves when the file is compressed.
 */
function compressFile(inputFilePath, outputFilePath) {
  return new Promise((resolve, reject) => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(inputFilePath);
    // Removed .gz extension here, so the output file will have the original name
    const output = fs.createWriteStream(outputFilePath);

    input
      .pipe(gzip)
      .pipe(output)
      .on("finish", () => {
        // Updated log message to reflect no .gz extension
        console.log(`Compressed: ${inputFilePath} -> ${outputFilePath}`);
        resolve();
      })
      .on("error", (err) => {
        console.error(`Error compressing ${inputFilePath}:`, err);
        reject(err);
      });
  });
}

/**
 * Recursively traverses an input directory, compresses files, and recreates the structure in an output directory.
 * @param {string} inputDir - The path to the input directory.
 * @param {string} outputDir - The path to the output directory where compressed files will be saved.
 * @returns {Promise<void>} A promise that resolves when all files in the directory are processed.
 */
async function compressFolder(inputDir, outputDir) {
  // Ensure the output directory exists
  try {
    await fs.promises.mkdir(outputDir, { recursive: true });
    console.log(`Ensured output directory exists: ${outputDir}`);
  } catch (err) {
    console.error(`Error creating output directory ${outputDir}:`, err);
    return; // Exit if output directory cannot be created
  }

  const items = await fs.promises.readdir(inputDir, { withFileTypes: true });

  for (const item of items) {
    const inputPath = path.join(inputDir, item.name);
    // outputPath will now directly be the name of the compressed file
    const outputPath = path.join(outputDir, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recursively call compressFolder
      console.log(`Entering directory: ${inputPath}`);
      await compressFolder(inputPath, outputPath);
    } else if (item.isFile()) {
      // If it's a file, compress it
      try {
        await compressFile(inputPath, outputPath);
      } catch (err) {
        // Error already logged in compressFile, just continue to next item
      }
    }
  }
}

// --- Configuration ---
const INPUT_FOLDER = "./public"; // The folder you want to compress
const OUTPUT_FOLDER = "./compressed_output"; // The folder where compressed files will be saved

// --- Execution ---
(async () => {
  console.log(
    `Starting compression from '${INPUT_FOLDER}' to '${OUTPUT_FOLDER}'...`,
  );
  try {
    await compressFolder(INPUT_FOLDER, OUTPUT_FOLDER);
    console.log("\nCompression process completed successfully!");
  } catch (error) {
    console.error("\nAn unhandled error occurred during compression:", error);
  }
})();
