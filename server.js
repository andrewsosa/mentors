require('dotenv').config();

const next = require('next');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const logger = require('morgan');

const server = express();
const http = require('http').Server(server);
const io = require('socket.io')(http);

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler();

const api = require('./backend/routes');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

app.prepare().then(db.once('open', () => {
  // Middleware
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.use((req, res, nxt) => { req.io = io; nxt(); });

  // Routes
  server.use('/api', api);
  server.use(handler);

  http.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
}));

db.on('error', console.error.bind(console, 'connection error:'));
