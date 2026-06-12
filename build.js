const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const dist = path.join(root, 'dist');
const itemsToCopy = ['index.html', 'css', 'js', 'images'];

async function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  await fs.promises.rm(dir, { recursive: true, force: true });
}

async function copyItem(src, dest) {
  const stat = await fs.promises.stat(src);
  if (stat.isDirectory()) {
    await fs.promises.mkdir(dest, { recursive: true });
    const entries = await fs.promises.readdir(src);
    await Promise.all(entries.map(entry => copyItem(path.join(src, entry), path.join(dest, entry))));
  } else {
    await fs.promises.copyFile(src, dest);
  }
}

async function build() {
  await rmDir(dist);
  await fs.promises.mkdir(dist, { recursive: true });

  for (const item of itemsToCopy) {
    const srcPath = path.join(root, item);
    const destPath = path.join(dist, item);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Skipping missing item: ${item}`);
      continue;
    }
    await copyItem(srcPath, destPath);
    console.log(`Copied ${item}`);
  }

  console.log('Build complete: dist/ is ready for deployment.');
}

build().catch(error => {
  console.error(error);
  process.exit(1);
});
