// const createError = require('http-errors');
import { dbConnection } from './database';
import express from 'express';
import cors from 'cors';
import router from './routes';
// import router from 'routes';
// const router = require('./routes')
const app = express();
require('dotenv').config();

dbConnection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', router);

// cron.schedule('* * * * * *', () => {
//   console.log('Ejecutandose')
// })

export default app;
