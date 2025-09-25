const request = require('supertest');
const app = require('../src/server');

describe('Health Endpoint', () => {
  describe('GET /api/v1/health', () => {
    it('should return health status with 200 status code', async () => {
      const response = await request(app)
        .get('/api/v1/health')
        .expect(200);

      // Validate response structure
      expect(response.body).toHaveProperty('service');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('uptime');

      // Validate specific values
      expect(response.body.service).toBe('ifreedmen-api');
      expect(response.body.status).toBe('healthy');
      expect(typeof response.body.uptime).toBe('number');
      expect(response.body.uptime).toBeGreaterThanOrEqual(0);
      
      // Validate timestamp format (ISO 8601)
      expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
      expect(isNaN(new Date(response.body.timestamp))).toBe(false);
    });

    it('should return content-type application/json', async () => {
      const response = await request(app)
        .get('/api/v1/health')
        .expect('Content-Type', /json/)
        .expect(200);
    });

    it('should include memory details in response', async () => {
      const response = await request(app)
        .get('/api/v1/health')
        .expect(200);

      expect(response.body).toHaveProperty('details');
      expect(response.body.details).toHaveProperty('memory');
      expect(response.body.details.memory).toHaveProperty('used');
      expect(response.body.details.memory).toHaveProperty('total');
      expect(typeof response.body.details.memory.used).toBe('number');
      expect(typeof response.body.details.memory.total).toBe('number');
    });

    it('should include environment in details', async () => {
      const response = await request(app)
        .get('/api/v1/health')
        .expect(200);

      expect(response.body.details).toHaveProperty('environment');
      expect(typeof response.body.details.environment).toBe('string');
    });
  });

  describe('Health Check Response Schema', () => {
    it('should match expected HealthCheck type structure', async () => {
      const response = await request(app)
        .get('/api/v1/health')
        .expect(200);

      const expectedProperties = [
        'service',
        'status', 
        'timestamp',
        'version',
        'uptime',
        'details'
      ];

      expectedProperties.forEach(prop => {
        expect(response.body).toHaveProperty(prop);
      });

      // Validate status values
      const validStatuses = ['healthy', 'degraded', 'unhealthy'];
      expect(validStatuses).toContain(response.body.status);
    });
  });
});

describe('API Root', () => {
  describe('GET /', () => {
    it('should return API information', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('endpoints');
      expect(response.body.name).toBe('iFreedmen API Gateway');
    });
  });
});

describe('Error Handling', () => {
  describe('GET /nonexistent', () => {
    it('should return 404 for unknown endpoints', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);

      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Endpoint not found');
    });
  });
});