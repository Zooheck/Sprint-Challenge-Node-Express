const express = require('express');
const helmet = require('helmet');

const actionsRouter = require('./data/routers/action-router')
const projectsRouter = require('./data/routers/project-router')

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

module.exports = server;