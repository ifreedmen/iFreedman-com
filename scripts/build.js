#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../public');
const distDir = path.join(__dirname, '../dist');

console.log('Building iFreedmen flagship website...');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Create dist directory
fs.mkdirSync(distDir, { recursive: true });

// Copy public files to dist
function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy src directory to dist for module imports
const srcModulesDir = path.join(__dirname, '../src');
const distSrcDir = path.join(distDir, 'src');
if (fs.existsSync(srcModulesDir)) {
  fs.mkdirSync(distSrcDir, { recursive: true });
  copyDir(srcModulesDir, distSrcDir);
}

// Copy public content
copyDir(srcDir, distDir);

// Copy logo file from root to dist
const logoPath = path.join(__dirname, '../iFreedmen-logo-official.png');
const distLogoPath = path.join(distDir, 'iFreedmen-logo-official.png');
if (fs.existsSync(logoPath)) {
  fs.copyFileSync(logoPath, distLogoPath);
} else {
  console.warn('Warning: iFreedmen-logo-official.png not found in root');
}

console.log('✓ Build completed successfully!');
console.log(`✓ Files copied to ${distDir}`);