const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../node_modules/json-server/public'),
  port: 4000,
  noCors: true,
});
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
