/* eslint-env jest */

const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { app } = require('../app');

let mongod;
const ticketRoute = '/api/tickets';
const cleanDB = done => mongoose.connection.db.dropDatabase(done);
const body = schema => res => expect(res.body).toMatchObject(schema);

beforeAll(async () => {
  mongod = new MongoMemoryServer();
  process.env.MONGO_URI = await mongod.getConnectionString();
  await app.connect();
});

afterAll(async () => {
  await app.disconnect();
  mongod.stop();
});

describe(`GET ${ticketRoute}`, () => {
  it('starts with an empty list', done => {
    request(app)
      .get(ticketRoute)
      .expect('Content-Type', /json/)
      .expect(res => res.body === { tickets: [] })
      .expect(200, done);
  });
});

describe(`POST ${ticketRoute}`, () => {
  afterAll(cleanDB);

  const sampleTicket = {
    name: 'Jestr',
    location: 'Azure',
    topics: ['Testing', 'Jest'],
  };

  it('accepts a new ticket', done => {
    request(app)
      .post(ticketRoute)
      .send(sampleTicket)
      .expect(
        body({
          _id: /\d{24}/,
          created: /\s{24}/,
          ...sampleTicket,
        }),
      )
      .expect(201, done);
  });

  it('retained our sample ticket', done => {
    request(app)
      .get(ticketRoute)
      .expect(
        body({
          tickets: [
            {
              _id: /\d{24}/,
              created: /\s{24}/,
              ...sampleTicket,
            },
          ],
        }),
      )
      .expect(200, done);
  });
});
