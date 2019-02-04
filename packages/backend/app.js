require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const http = require('http');
// const socket = require('socket.io');

const app = express();
const api = require('./routes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', api);

// Socket IO
const server = http.Server(app);
// const io = socket(server);
// app.use((req, res, nxt) => {
//   req.io = io;
//   nxt();
// });

// Check for db conn
app.connect = async () => {
  mongoose.Promise = Promise;
  return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
};

app.disconnect = done => {
  mongoose.disconnect(done);
};

module.exports = {
  app,
  server,
};
