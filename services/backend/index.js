require('dotenv').config();

const server = require('./src/server');

server.connect().then(() => {
  server.listen().then(
    ({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    },
    err => console.error.bind('Mongoose connection error: '),
  );
});
