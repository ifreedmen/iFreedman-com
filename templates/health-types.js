/**
 * Shared HealthCheck type definition for iFreedmen API services
 * Ensures consistent health status reporting across all services
 */

/**
 * @typedef {Object} HealthCheck
 * @property {string} service - Service name (e.g., "ifreedmen-api")
 * @property {string} status - Health status: "healthy", "degraded", or "unhealthy"
 * @property {string} timestamp - ISO 8601 timestamp of the health check
 * @property {string} version - Service version
 * @property {Object} [details] - Additional health details (optional)
 * @property {number} [uptime] - Service uptime in seconds (optional)
 * @property {Object} [dependencies] - Status of external dependencies (optional)
 */

const HealthStatus = {
  HEALTHY: 'healthy',
  DEGRADED: 'degraded',
  UNHEALTHY: 'unhealthy'
};

/**
 * Create a standardized health check response
 * @param {string} service - Service name
 * @param {string} status - Health status
 * @param {Object} options - Additional options
 * @returns {HealthCheck} Standardized health check object
 */
function createHealthCheck(service, status = HealthStatus.HEALTHY, options = {}) {
  return {
    service,
    status,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    uptime: process.uptime(),
    ...options
  };
}

module.exports = {
  HealthStatus,
  createHealthCheck
};