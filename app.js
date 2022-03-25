// const createError = require('http-errors');
const express = require('express');
const { dbConnection } = require('./database');
const app = express();
require('dotenv').config();
const router = require('./routes');
const axios = require('./utils/axios');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnection();

axios.interceptors.request.use(req => {

  req.headers.authorization = `Bearer ${process.env.ACCESS_TOKEN_CR}`;
  req.headers.headers = {
    'Contet-Type': 'application/x-www-form-urlencoded'
  }

  return req;
});

app.use('/v1', router);

// cron.schedule('* * * * * *', () => {
//   console.log('Ejecutandose')
// })


module.exports = app;
