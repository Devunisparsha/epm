// Import the sharp library
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// --- Configuration ---
const inputDir = './public'; // Directory where your webp/PNG images are located
const outputDir = './public_webp'; // Directory where converted WebP images will be saved
const webpQuality = 100; // WebP quality (0-100), 80 is a good balance for most cases

// --- Helper Function to ensure directory exists ---
function ensureDirectoryExistence(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// --- Main Conversion Function ---
async function convertImagesToWebP() {
  ensureDirectoryExistence(inputDir);
  ensureDirectoryExistence(outputDir);

  console.log(`\nStarting image conversion from '${inputDir}' to '${outputDir}'...`);

  // Function to recursively process directories
  async function processDirectory(currentInputDir, currentOutputDir) {
    ensureDirectoryExistence(currentOutputDir); // Ensure output directory exists for current path

    const files = fs.readdirSync(currentInputDir);

    for (const file of files) {
      const currentInputPath = path.join(currentInputDir, file);
      const currentOutputPath = path.join(currentOutputDir, file);

      // Check if it's a directory
      if (fs.statSync(currentInputPath).isDirectory()) {
        console.log(`Entering subdirectory: ${currentInputPath}`);
        // Recursively call for subdirectories
        await processDirectory(currentInputPath, currentOutputPath);
      } else {
        // It's a file, check if it's an image
        const fileNameWithoutExt = path.parse(file).name;
        const outputFileWebP = path.join(currentOutputDir, `${fileNameWithoutExt}.webp`);
        const fileExtension = path.extname(file).toLowerCase();

        if (fileExtension === '.webp' || fileExtension === '.jpeg' || fileExtension === '.png') {
          try {
            console.log(`Processing: ${currentInputPath}`);
            // Use sharp to read the image, convert to webp, and save
            await sharp(currentInputPath)
              .webp({ quality: webpQuality }) // Convert to WebP with specified quality
              .toFile(outputFileWebP); // Save the output file

            console.log(`  -> Converted: ${path.relative(inputDir, currentInputPath)} to ${path.relative(outputDir, outputFileWebP)}`);
          } catch (error) {
            console.error(`  -> Error converting ${path.relative(inputDir, currentInputPath)}:`, error.message);
          }
        } else {
          console.log(`Skipping non-image file: ${path.relative(inputDir, currentInputPath)}`);
        }
      }
    }
  }

  // Start the recursive process from the base input directory
  await processDirectory(inputDir, outputDir);

  console.log('\nImage conversion process completed!');
}

// --- Run the conversion ---
convertImagesToWebP();
