const express = require('express');
// const { PORT } = require('./utils/config');
require('express-async-errors');
const errorHandler = require('./utils/errors')

const app = express();
const cors = require('cors');
const dumbRouter = require('./controllers/dumbs');
const { unknownEndpoint, logger } = require('./utils/middleware');

app.use(cors());
app.use(express.json());

app.use('/api/dumbs', dumbRouter);

app.use(unknownEndpoint);
app.use(logger);

app.use(errorHandler)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}


module.exports = app;
