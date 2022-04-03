const express = require('express');
const http = require('http');
const socket = require('./socket.js');

const app = express();

app.get('*', (req, res) => {
  return res.end('howdoising');
});

async function connect() {
  const server = http.createServer(app);
  const port = process.env.PORT || 8080;

  await server.listen(port);
  console.log(`Server is listening on port ${port}`);

  socket(server, {
    cors: {
      origin: [
        'https://howdoising.herokuapp.com',
        'https://gopendrajangir.github.io/howdoising/',
      ],
    },
  });
}

connect().catch((err) => {
  console.log(err);
});
