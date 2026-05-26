const fs = require('fs');
const path = require('path');
const https = require('https');

const SOUNDS_DIR = path.join(__dirname, '..', 'public', 'sounds');

if (!fs.existsSync(SOUNDS_DIR)) {
  fs.mkdirSync(SOUNDS_DIR, { recursive: true });
}

const sounds = [
  { name: 'rain.mp3', url: 'https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3' },
  { name: 'forest.mp3', url: 'https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3' },
  { name: 'vinyl.mp3', url: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3' },
  { name: 'river.mp3', url: 'https://moodist.app/audio/nature/river.mp3' },
  { name: 'cafe.mp3', url: 'https://moodist.app/audio/places/cafe.mp3' },
  { name: 'library.mp3', url: 'https://moodist.app/audio/places/library.mp3' },
  { name: 'singing-bowl.mp3', url: 'https://moodist.app/audio/things/singing-bowl.mp3' },
  { name: 'fireplace.mp3', url: 'https://assets.mixkit.co/active_storage/sfx/2517/2517-preview.mp3' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status code: ${response.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log(`Starting downloads to: ${SOUNDS_DIR}`);
  for (const sound of sounds) {
    const dest = path.join(SOUNDS_DIR, sound.name);
    console.log(`Downloading ${sound.name} from ${sound.url}...`);
    try {
      await downloadFile(sound.url, dest);
      console.log(`✅ Success: ${sound.name}`);
    } catch (err) {
      console.error(`❌ Failed ${sound.name}:`, err.message);
    }
  }
  console.log('All downloads finished.');
}

main();
