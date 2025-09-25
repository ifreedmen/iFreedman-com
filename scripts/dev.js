const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting development server...');

// Build the site first
const buildProcess = spawn('node', ['scripts/build.js'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('🌐 Starting local server on http://localhost:3000');
    
    // Start the HTTP server
    const serverProcess = spawn('npm', ['exec', 'http-server', 'public', '-p', '3000', '-o'], {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    serverProcess.on('close', (serverCode) => {
      console.log(`Development server exited with code ${serverCode}`);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
      console.log('\n👋 Shutting down development server...');
      serverProcess.kill('SIGINT');
      process.exit(0);
    });
    
  } else {
    console.error(`Build failed with code ${code}`);
    process.exit(1);
  }
});