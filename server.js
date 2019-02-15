const express = require('express');
const helmet = require('helmet');

const actionsRouter = require('./data/routers/action-router')


const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionsRouter)


module.exports = server;