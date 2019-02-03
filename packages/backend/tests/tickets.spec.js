/* eslint-env jest */

const request = require('supertest');
const { app } = require('../app');

describe('api/tickets', () => {
  beforeAll(async () => {
    await app.connect();
  });

  afterAll(done => {
    app.disconnect(done);
  });

  it('responds to GET requests', done => {
    request(app)
      .get('/api/tickets')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
