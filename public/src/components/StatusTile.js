/**
 * StatusTile component - displays backend health status with link to status page
 */
import { fetchHealthStatus, getMockHealthStatus } from '../utils/healthCheck.js';

export class StatusTile {
  constructor(container) {
    this.container = container;
    this.state = {
      isLoading: true,
      healthData: null,
      error: null,
    };
    
    this.init();
  }

  async init() {
    this.render();
    await this.loadHealthStatus();
  }

  async loadHealthStatus() {
    this.setState({ isLoading: true, error: null });
    
    try {
      const healthData = await fetchHealthStatus();
      this.setState({ 
        healthData, 
        isLoading: false,
        error: healthData.success ? null : healthData.error 
      });
    } catch (error) {
      // Fallback to mock data on any error
      const mockData = getMockHealthStatus();
      this.setState({ 
        healthData: mockData, 
        isLoading: false,
        error: `Using fallback data: ${error.message}` 
      });
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getStatusColor(status) {
    switch (status) {
      case 'healthy':
      case 'operational':
        return '#10b981'; // Green
      case 'degraded':
      case 'warning':
        return '#f59e0b'; // Orange
      case 'down':
      case 'error':
        return '#ef4444'; // Red
      case 'unavailable':
        return '#6b7280'; // Gray
      default:
        return '#3b82f6'; // Blue
    }
  }

  getStatusIcon(status) {
    switch (status) {
      case 'healthy':
      case 'operational':
        return '✓';
      case 'degraded':
      case 'warning':
        return '⚠';
      case 'down':
      case 'error':
        return '✗';
      case 'unavailable':
        return '?';
      default:
        return '•';
    }
  }

  render() {
    const { isLoading, healthData, error } = this.state;
    
    const statusColor = healthData ? this.getStatusColor(healthData.status) : '#6b7280';
    const statusIcon = healthData ? this.getStatusIcon(healthData.status) : '•';
    const statusText = healthData ? healthData.status : 'checking...';
    const statusMessage = healthData ? healthData.message : 'Checking system status...';

    this.container.innerHTML = `
      <div class="status-tile" style="
        background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
        border-radius: 12px;
        padding: 24px;
        color: white;
        text-decoration: none;
        display: block;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid #4b5563;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      ">
        ${isLoading ? `
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="
              width: 20px;
              height: 20px;
              border: 2px solid #4b5563;
              border-top: 2px solid ${statusColor};
              border-radius: 50%;
              animation: spin 1s linear infinite;
            "></div>
            <div>
              <div style="font-size: 14px; color: #9ca3af; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">System Status</div>
              <div style="font-size: 16px; font-weight: 500;">Checking status...</div>
            </div>
          </div>
        ` : `
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="
              width: 40px;
              height: 40px;
              background-color: ${statusColor};
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              font-weight: bold;
              color: white;
            ">${statusIcon}</div>
            <div style="flex: 1;">
              <div style="font-size: 14px; color: #9ca3af; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px;">System Status</div>
              <div style="font-size: 18px; font-weight: 600; color: ${statusColor}; text-transform: capitalize; margin-bottom: 2px;">${statusText}</div>
              <div style="font-size: 14px; color: #d1d5db;">${statusMessage}</div>
              ${healthData && healthData.mock ? '<div style="font-size: 12px; color: #9ca3af; margin-top: 4px;">Demo data</div>' : ''}
            </div>
            <div style="
              font-size: 24px;
              color: #6b7280;
              transform: rotate(-45deg);
              transition: transform 0.2s ease;
            ">↗</div>
          </div>
        `}
        
        <div style="
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${statusColor} 0%, transparent 100%);
        "></div>
      </div>
      
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .status-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .status-tile:hover div:last-child {
          transform: rotate(0deg);
        }
      </style>
    `;

    // Add click handler to navigate to status page
    this.container.querySelector('.status-tile').addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://status.ifreedmen.com', '_blank', 'noopener,noreferrer');
    });
  }
}