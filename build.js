#!/usr/bin/env node

/**
 * Build script for the iFreedmen Creative Suite
 * Copies files from src/ to dist/ for GitHub Pages deployment
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  ensureDir(destDir);
  fs.copyFileSync(src, dest);
}

function copyDirectory(src, dest) {
  ensureDir(dest);
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

function cleanDist() {
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
}

function build() {
  console.log('🔨 Building iFreedmen Creative Suite...');
  
  // Clean dist directory
  console.log('🧹 Cleaning dist directory...');
  cleanDist();
  
  // Copy src to dist
  console.log('📁 Copying files from src/ to dist/...');
  copyDirectory(SRC_DIR, DIST_DIR);
  
  // Log completion
  console.log('✅ Build completed successfully!');
  console.log(`📦 Files generated in: ${DIST_DIR}`);
  console.log('🚀 Ready for GitHub Pages deployment');
}

// Check if src directory exists
if (!fs.existsSync(SRC_DIR)) {
  console.error('❌ Error: src/ directory not found');
  console.error('   Make sure you have a src/ directory with your website files');
  process.exit(1);
}

// Run the build
try {
  build();
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}