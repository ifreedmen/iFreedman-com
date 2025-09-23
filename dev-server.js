#!/usr/bin/env node

/**
 * Simple development server for the iFreedmen Creative Suite
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const SRC_DIR = path.join(__dirname, 'src');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'text/plain';
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    const mimeType = getMimeType(filePath);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let requestPath = req.url;
  
  // Default to index.html for root
  if (requestPath === '/') {
    requestPath = '/index.html';
  }
  
  // Remove query string
  requestPath = requestPath.split('?')[0];
  
  const filePath = path.join(SRC_DIR, requestPath);
  
  // Security check - ensure file is within src directory
  if (!filePath.startsWith(SRC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>');
    return;
  }
  
  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    serveFile(res, filePath);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 iFreedmen Creative Suite development server running at:`);
  console.log(`   Local:   http://localhost:${PORT}`);
  console.log('');
  console.log('📁 Serving files from: ./src/');
  console.log('⏰ Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Development server stopped');
  process.exit(0);
});