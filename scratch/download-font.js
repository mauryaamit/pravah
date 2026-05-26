// scratch/download-font.js
const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://github.com/google/fonts/raw/main/ofl/notoserifdevanagari/NotoSerifDevanagari%5Bwdth%2Cwght%5D.ttf';
const dest = path.join(__dirname, '..', 'public', 'fonts', 'NotoSerifDevanagari-Variable.ttf');

function download(url, destPath) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301) {
      console.log('Redirecting to:', res.headers.location);
      download(res.headers.location, destPath);
      return;
    }

    if (res.statusCode !== 200) {
      console.error('Failed to download font, status code:', res.statusCode);
      process.exit(1);
    }

    const fileStream = fs.createWriteStream(destPath);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Download completed successfully.');
      process.exit(0);
    });

    fileStream.on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error('File stream error:', err);
      process.exit(1);
    });
  }).on('error', (err) => {
    console.error('Request error:', err);
    process.exit(1);
  });
}

// Ensure dir exists
const dir = path.dirname(dest);
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Starting download...');
download(url, dest);
