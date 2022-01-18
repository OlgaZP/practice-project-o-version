const express = require('express');
const cors = require('cors');
const router = require('./router');
const handlerError = require('./handlerError/handler');
const logger = require('./config/winstonConfig');
const expressWinston = require('express-winston');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(expressWinston.logger(logger));
app.use(router);
app.use(expressWinston.errorLogger(logger));
app.use(handlerError);

module.exports = app;
