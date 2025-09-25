/**
 * Test for health endpoint functionality
 */

const http = require('http');
const app = require('../api/server');
const { createHealthyStatus } = require('../api/types');

let server;
const PORT = 3001; // Use different port for testing

// Start test server
function startTestServer() {
  return new Promise((resolve) => {
    server = app.listen(PORT, () => {
      console.log(`Test server started on port ${PORT}`);
      resolve();
    });
  });
}

// Stop test server
function stopTestServer() {
  return new Promise((resolve) => {
    if (server) {
      server.close(() => {
        console.log('Test server stopped');
        resolve();
      });
    } else {
      resolve();
    }
  });
}

// Test health endpoint
function testHealthEndpoint() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: PORT,
      path: '/health',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          // Test status code
          if (res.statusCode !== 200) {
            throw new Error(`Expected status 200, got ${res.statusCode}`);
          }
          
          // Test response structure
          if (!response.status) {
            throw new Error('Response missing status field');
          }
          
          if (!response.service) {
            throw new Error('Response missing service field');
          }
          
          if (!response.timestamp) {
            throw new Error('Response missing timestamp field');
          }
          
          if (!response.version) {
            throw new Error('Response missing version field');
          }
          
          if (response.status !== 'healthy') {
            throw new Error(`Expected status 'healthy', got '${response.status}'`);
          }
          
          console.log('✓ Health endpoint test passed');
          console.log(`  Status: ${response.status}`);
          console.log(`  Service: ${response.service}`);
          console.log(`  Version: ${response.version}`);
          console.log(`  Timestamp: ${response.timestamp}`);
          
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// Test shared HealthCheck type functions
function testHealthCheckTypes() {
  console.log('Testing HealthCheck type functions...');
  
  const healthyStatus = createHealthyStatus('test-service', '1.0.0', { test: true });
  
  if (healthyStatus.status !== 'healthy') {
    throw new Error('createHealthyStatus should return healthy status');
  }
  
  if (healthyStatus.service !== 'test-service') {
    throw new Error('createHealthyStatus should set service name');
  }
  
  if (healthyStatus.version !== '1.0.0') {
    throw new Error('createHealthyStatus should set version');
  }
  
  if (!healthyStatus.timestamp) {
    throw new Error('createHealthyStatus should set timestamp');
  }
  
  console.log('✓ HealthCheck type functions test passed');
}

// Run all tests
async function runTests() {
  try {
    console.log('Starting API health endpoint tests...\n');
    
    // Test types first
    testHealthCheckTypes();
    console.log();
    
    // Start server and test endpoint
    await startTestServer();
    await testHealthEndpoint();
    await stopTestServer();
    
    console.log('\n✅ All tests passed!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    await stopTestServer();
    process.exit(1);
  }
}

runTests();