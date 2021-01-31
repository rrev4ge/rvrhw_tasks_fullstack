const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json({ type: 'application/json' })); // built-in body-parser

app.use('/api', router);

// error handler
app.use(errorHandlers.sequelizeErrorHandler, errorHandlers.errorHandler);

module.exports = app;
