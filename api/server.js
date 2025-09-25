/**
 * iFreedmen Creative Suite API Gateway
 * Main API server with health endpoint
 */

const express = require('express');
const { createHealthyStatus } = require('./types');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON responses
app.use(express.json());

// Health endpoint using shared HealthCheck type
app.get('/health', (req, res) => {
  try {
    const healthStatus = createHealthyStatus(
      'iFreedmen Creative Suite API Gateway',
      '1.0.0',
      {
        uptime: Math.floor(process.uptime()),
        memory: process.memoryUsage(),
        environment: process.env.NODE_ENV || 'development'
      }
    );
    
    res.status(200).json(healthStatus);
  } catch (error) {
    const unhealthyStatus = {
      status: 'unhealthy',
      service: 'iFreedmen Creative Suite API Gateway',
      timestamp: Math.floor(Date.now() / 1000),
      version: '1.0.0',
      details: {
        error: error.message
      }
    };
    
    res.status(503).json(unhealthyStatus);
  }
});

// Basic route for API information
app.get('/', (req, res) => {
  res.json({
    name: 'iFreedmen Creative Suite API Gateway',
    version: '1.0.0',
    description: 'API Gateway for the iFreedmen Creative Suite ecosystem',
    endpoints: {
      health: '/health - Service health status'
    }
  });
});

// Start server only if not in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`iFreedmen API Gateway running on port ${PORT}`);
    console.log(`Health endpoint: http://localhost:${PORT}/health`);
  });
}

module.exports = app;