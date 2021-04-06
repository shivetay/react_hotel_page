// const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults({
  port: 4000,
  noCors: true,
});
const port = process.env.PORT || 4000;

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use(middlewares);
server.use(router);

server.listen(port);
