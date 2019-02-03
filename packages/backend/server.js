require('dotenv').config();

const { app, server } = require('./app');

app
  .connect()
  .then(() => {
    const port = process.env.PORT || 3000;
    server.listen(port, err => {
      if (err) throw err;
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch(console.error.bind(console, 'connection error:'));
