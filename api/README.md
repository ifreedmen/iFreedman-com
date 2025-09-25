# iFreedmen Creative Suite API Gateway

This directory contains the API Gateway functionality for the iFreedmen Creative Suite.

## Structure

```
api/
├── server.js    # Main Express.js API server
└── types.js     # Shared HealthCheck types
```

## Usage

```bash
# Start the API server
npm run api

# Run tests
npm test
```

## Health Endpoint

### GET /health

Returns service health status using the shared HealthCheck type.

**Response Format:**
```json
{
  "status": "healthy",
  "service": "iFreedmen Creative Suite API Gateway",
  "timestamp": 1758783357,
  "version": "1.0.0",
  "details": {
    "uptime": 18,
    "memory": { ... },
    "environment": "development"
  }
}
```

**Status Values:**
- `healthy` - Service is operating normally
- `degraded` - Service is operating but with issues
- `unhealthy` - Service is not operating correctly

## Shared Types

The `types.js` module provides shared HealthCheck type functions that can be used across all Creative Suite repositories:

- `createHealthyStatus(service, version, details)` - Creates a healthy status response
- `createUnhealthyStatus(service, version, details)` - Creates an unhealthy status response

This ensures consistent health reporting across the entire Creative Suite ecosystem.

## Brand Guard Compliance

This API uses only approved brand/domain tokens and follows the established iFreedmen Creative Suite standards.