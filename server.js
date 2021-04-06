// const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults({
  port: 4000,
  noCors: true,
});
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port);
