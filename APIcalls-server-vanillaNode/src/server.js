const http = require('http');
const router = require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, () =>
  console.log(`Server is running on: http://${host}:${port}`)
);
