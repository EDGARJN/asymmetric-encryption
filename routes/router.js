const express = require('express');
const { messageSender } = require('../handler/sender');
const { messageReceiver } = require('../handler/receiver');

const mainRouter = express.Router();

mainRouter.post("/sender",messageSender);
mainRouter.post("/receiver",messageReceiver);

module.exports = mainRouter;

