// scripts/generate-icons.ts
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const SVG_PATH = path.join(process.cwd(), 'public/pravah-logo.svg');
const OUT_DIR = path.join(process.cwd(), 'public/icons');

const SIZES = [72, 96, 128, 144, 152, 180, 192, 384, 512];

const NAVY_BG = { r: 11, g: 22, b: 40 }; // #0B1628

async function generate() {
  // Ensure output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Standard sizes with flattened dark navy background (removes transparent corners)
  for (const size of SIZES) {
    await sharp(SVG_PATH)
      .resize(size, size)
      .flatten({ background: NAVY_BG })
      .png()
      .toFile(path.join(OUT_DIR, `icon-${size}x${size}.png`));
    console.log(`Generated icon-${size}x${size}.png`);
  }

  // Maskable icon — full bleed (no padding gap), matching the navy background
  await sharp(SVG_PATH)
    .resize(512, 512)
    .flatten({ background: NAVY_BG })
    .png()
    .toFile(path.join(OUT_DIR, 'maskable-icon-512x512.png'));
  console.log('Generated maskable-icon-512x512.png');

  // Apple touch icon (180x180) - full bleed
  await sharp(SVG_PATH)
    .resize(180, 180)
    .flatten({ background: NAVY_BG })
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

  console.log('All icons generated successfully with full bleed dark navy background.');
}

generate().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
