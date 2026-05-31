// scripts/generate-icons.ts
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const SVG_PATH = path.join(process.cwd(), 'public/pravah-logo.svg');
const OUT_DIR = path.join(process.cwd(), 'public/icons');

const SIZES = [72, 96, 128, 144, 152, 180, 192, 384, 512];

async function generate() {
  // Ensure output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  for (const size of SIZES) {
    await sharp(SVG_PATH)
      .resize(size, size)
      .png()
      .toFile(path.join(OUT_DIR, `icon-${size}x${size}.png`));
    console.log(`Generated icon-${size}x${size}.png`);
  }

  // Maskable icon — add 20% padding (safe zone for Android)
  await sharp(SVG_PATH)
    .resize(410, 410)  // logo within 512px canvas with padding
    .extend({ 
      top: 51, 
      bottom: 51, 
      left: 51, 
      right: 51,
      background: { r: 245, g: 240, b: 232, alpha: 1 } // --bg-primary color
    }) 
    .png()
    .toFile(path.join(OUT_DIR, 'maskable-icon-512x512.png'));
  console.log('Generated maskable-icon-512x512.png');

  // Apple touch icon (180x180)
  await sharp(SVG_PATH)
    .resize(180, 180)
    .png()
    .toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Favicons
  await sharp(SVG_PATH)
    .resize(32, 32)
    .png()
    .toFile(path.join(OUT_DIR, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');

  await sharp(SVG_PATH)
    .resize(16, 16)
    .png()
    .toFile(path.join(OUT_DIR, 'favicon-16x16.png'));
  console.log('Generated favicon-16x16.png');

  console.log('All icons generated successfully.');
}

generate().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
