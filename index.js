const screenshot = require('screenshot-desktop');
const sharp = require('sharp');
const AdmZip = require('adm-zip');
const path = require('path');
const os = require('os');
const fs = require('fs');

(async () => {
  const desktop = path.join(os.homedir(), 'OneDrive', 'Desktop');

  const imgPath = path.join(desktop, 'processed_screenshot.jpg');
  const zipPath = path.join(desktop, 'processed_screenshot.zip');

  const img = await screenshot();

  await sharp(img)
    .grayscale()
    .flip()
    .jpeg({ quality: 60 })
    .toFile(imgPath);

  const zip = new AdmZip();
  zip.addLocalFile(imgPath);
  zip.writeZip(zipPath);

  console.log('Saved:', zipPath);
})();
