const fs = require('fs');
const path = require('path');

// Read the current manifest
const manifestPath = path.join(__dirname, '../public/site.webmanifest');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Revert paths for development
manifest.icons.forEach(icon => {
  // Remove the repository name prefix if it exists
  icon.src = icon.src.replace('/johnbabs-environmental-services/', '');
});

// Revert start URL
manifest.start_url = manifest.start_url.replace('/johnbabs-environmental-services/', '/');

// Write back to file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('✅ Manifest reverted for development'); 