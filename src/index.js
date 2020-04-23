const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const toUpperCase = (str) => str.toUpperCase();

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(toUpperCase(`Hello World`));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // eslint-disable-line no-console
});

exports.toUpperCase = toUpperCase;