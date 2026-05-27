import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = 'C:\\Users\\Alok\\.gemini\\antigravity-ide\\brain\\0d2ef841-75d4-4260-93b9-a38494ae3317';
const destDir = path.join(__dirname, '..', 'public');

const solidSrc = path.join(srcDir, 'media__1779878021383.png');
const transparentSrc = path.join(srcDir, 'media__1779878057225.png');

const solidDest = path.join(destDir, 'irtiqa-logo-solid.png');
const transparentDest = path.join(destDir, 'irtiqa-logo-transparent.png');

try {
  // Check if source files exist
  if (!fs.existsSync(solidSrc)) {
    console.error(`Error: Solid logo not found at ${solidSrc}`);
    process.exit(1);
  }
  if (!fs.existsSync(transparentSrc)) {
    console.error(`Error: Transparent logo not found at ${transparentSrc}`);
    process.exit(1);
  }

  // Copy files
  fs.copyFileSync(solidSrc, solidDest);
  console.log(`Successfully copied solid logo to ${solidDest}`);

  fs.copyFileSync(transparentSrc, transparentDest);
  console.log(`Successfully copied transparent logo to ${transparentDest}`);

  console.log('\nLogo copy operation completed successfully!');
} catch (err) {
  console.error('Error copying logos:', err);
  process.exit(1);
}
