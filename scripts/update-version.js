const fs = require('fs');

// get version from package.json or environment (for GitHub Actions)
let version;
if (process.env.GITHUB_REF && process.env.GITHUB_REF.startsWith('refs/tags/v')) {
    // extract version from git tag in GitHub Actions
    version = process.env.GITHUB_REF.replace('refs/tags/v', '');
} else {
    // use package.json version for local development
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    version = packageJson.version;
}

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
