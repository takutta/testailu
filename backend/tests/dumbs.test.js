const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

describe('Dumbs API', () => {
  test('GET /api/dumbs returns a message', async () => {
    const response = await api.get('/api/dumbs');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});
