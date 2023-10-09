const http = require('http');
const pessoas = require('./db');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/json');
  if (req.method === 'GET'){
    if (req.url === '/pessoas') {
      res.statusCode = 200;
      res.end(JSON.stringify(pessoas));
    } else {
      
    }
  }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});