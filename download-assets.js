const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => reject(err.message));
    });
  });
};

const assets = [
  { url: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Bliss_%28Windows_XP%29.png', dest: 'public/bliss.png' },
  // Windows XP Start Button Image (using a proxy or generating it via CSS later, for now just the bg)
];

async function main() {
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  for (const asset of assets) {
    try {
      console.log(`Downloading ${asset.url} to ${asset.dest}...`);
      await download(asset.url, path.join(__dirname, asset.dest));
      console.log('Done.');
    } catch (e) {
      console.error(`Failed to download ${asset.url}:`, e);
    }
  }
}

main();
