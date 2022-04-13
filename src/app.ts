// const createError = require('http-errors');
import express, { Request } from 'express';
import cors from 'cors';
import router from './routes';
import { dbConnection } from './database';
import { client } from './utils/axios';

const app = express();
require('dotenv').config();

dbConnection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.interceptors.request.use((req: Request) => {
    req.headers['authorization'] = `Bearer ${process.env.ACCESS_TOKEN_CR}`;
    req.headers['content-type'] = 'application/x-www-form-urlencoded';
    return req;
});

app.use('/v1', router);

// cron.schedule('* * * * * *', () => {
//   console.log('Ejecutandose')
// })

export default app;
