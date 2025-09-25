const express = require('express');
const { createHealthCheck, HealthStatus } = require('../types/health');

const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: API Health Check
 *     description: Returns the current health status of the API service
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 service:
 *                   type: string
 *                   example: "ifreedmen-api"
 *                 status:
 *                   type: string
 *                   enum: [healthy, degraded, unhealthy]
 *                   example: "healthy"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-01-15T10:30:00.000Z"
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 uptime:
 *                   type: number
 *                   example: 3600.5
 *       503:
 *         description: Service is unhealthy
 */
router.get('/health', (req, res) => {
  try {
    // Perform basic health checks
    const health = createHealthCheck('ifreedmen-api', HealthStatus.HEALTHY, {
      details: {
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
        },
        environment: process.env.NODE_ENV || 'development'
      }
    });

    res.status(200).json(health);
  } catch (error) {
    // Return unhealthy status if health check fails
    const health = createHealthCheck('ifreedmen-api', HealthStatus.UNHEALTHY, {
      error: error.message
    });
    
    res.status(503).json(health);
  }
});

module.exports = router;