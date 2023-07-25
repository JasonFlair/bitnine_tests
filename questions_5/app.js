const express = require('express');

const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const allRoutes = require('./routes/index');

// get env variables from .env file
require('dotenv/config');
// middleware
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(morgan('tiny')); // logger

const api = process.env.API_URL;

app.use(`${api}`, allRoutes);

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useUnifiedTopology: true,
  },
).then(
  () => {
    console.log('Connected to db');
  },
).catch((error) => {
  console.log({ error });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App is listening...');
});

module.exports = app;
