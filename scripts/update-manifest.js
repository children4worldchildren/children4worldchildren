import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the current manifest
const manifestPath = path.join(__dirname, '../public/site.webmanifest');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Update paths for production (GitHub Pages)
const repoName = 'children4worldchildren';
const basePath = `/${repoName}`;

// Update icon paths
manifest.icons.forEach(icon => {
  icon.src = `${basePath}/${icon.src}`;
});

// Update start URL
manifest.start_url = `${basePath}/`;

// Write back to file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('✅ Manifest updated for production deployment'); 