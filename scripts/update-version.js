const fs = require('fs');

// get current version
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version;

console.log(`updating version to ${version}...`);

// update 4gen.hta
const mainHtaPath = '4gen.hta';
let mainHta = fs.readFileSync(mainHtaPath, 'utf8');
mainHta = mainHta.replace(
    /<title>4gen(?:\s+v[\d.]+)?<\/title>/,
    `<title>4gen v${version}</title>`
);
mainHta = mainHta.replace(
    /<h2>4gen(?:\s+v[\d.]+)?<\/h2>/,
    `<h2>4gen v${version}</h2>`
);
fs.writeFileSync(mainHtaPath, mainHta);

// update installer.hta
const installerHtaPath = 'installer.hta';
let installerHta = fs.readFileSync(installerHtaPath, 'utf8');
installerHta = installerHta.replace(
    /<title>4gen installer(?:\s+v[\d.]+)?<\/title>/,
    `<title>4gen installer v${version}</title>`
);
installerHta = installerHta.replace(
    /<h3>install 4gen(?:\s+v[\d.]+)?<\/h3>/,
    `<h3>install 4gen v${version}</h3>`
);
fs.writeFileSync(installerHtaPath, installerHta);

console.log('version updated successfully');
