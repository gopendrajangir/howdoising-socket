const express = require('express');
const cors = require('cors');
const http = require('http');
const socket = require('./socket.js');

const app = express();

app.use(cors());

async function connect() {
  const server = http.createServer(app);
  const port = 8080;

  await server.listen(port);
  console.log(`Server is listening on port ${port}`);

  socket(server);
}

connect().catch((err) => {
  console.log(err);
});
