/**
 * Shared types for iFreedmen Creative Suite API
 */

/**
 * HealthCheck type for consistent health status reporting across the Creative Suite
 * @typedef {Object} HealthCheck
 * @property {string} status - Service status: 'healthy', 'degraded', or 'unhealthy'
 * @property {string} service - Name of the service being checked
 * @property {number} timestamp - Unix timestamp when check was performed
 * @property {string} version - Service version
 * @property {Object} details - Additional service-specific health information
 */

/**
 * Creates a healthy status response
 * @param {string} service - Service name
 * @param {string} version - Service version
 * @param {Object} details - Additional details
 * @returns {HealthCheck}
 */
function createHealthyStatus(service, version = '1.0.0', details = {}) {
  return {
    status: 'healthy',
    service,
    timestamp: Math.floor(Date.now() / 1000),
    version,
    details
  };
}

/**
 * Creates an unhealthy status response
 * @param {string} service - Service name
 * @param {string} version - Service version
 * @param {Object} details - Additional details including error information
 * @returns {HealthCheck}
 */
function createUnhealthyStatus(service, version = '1.0.0', details = {}) {
  return {
    status: 'unhealthy',
    service,
    timestamp: Math.floor(Date.now() / 1000),
    version,
    details
  };
}

module.exports = {
  createHealthyStatus,
  createUnhealthyStatus
};