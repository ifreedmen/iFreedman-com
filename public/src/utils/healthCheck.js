/**
 * HealthCheck utility for fetching backend health status
 */

const HEALTH_ENDPOINT = 'https://api.ifreedmen.com/health';
const TIMEOUT_MS = 5000; // 5 second timeout

/**
 * Fetches health status from the API endpoint
 * @returns {Promise<{status: string, message: string, timestamp: string}>}
 */
export async function fetchHealthStatus() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(HEALTH_ENDPOINT, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      status: data.status || 'unknown',
      message: data.message || 'Health check completed',
      timestamp: new Date().toISOString(),
      success: true,
    };
  } catch (error) {
    console.warn('Health check failed:', error.message);
    
    // Return fallback data when API is unavailable
    return {
      status: 'unavailable',
      message: 'Health status temporarily unavailable',
      timestamp: new Date().toISOString(),
      success: false,
      error: error.message,
    };
  }
}

/**
 * Gets a mock health status for development/fallback
 * @returns {Object} Mock health status object
 */
export function getMockHealthStatus() {
  return {
    status: 'healthy',
    message: 'All systems operational (mock data)',
    timestamp: new Date().toISOString(),
    success: true,
    mock: true,
  };
}