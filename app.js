// IMPORTS
import 'dotenv/config.js';
import __dirname from './utils.js';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
// import cookieParser from 'cookie-parser';
import logger from 'morgan';
//var indexRouter from './routes/index'
import indexRouter from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors';

let app = express();  //ejecutando el modulo de express, creo una APP DE BACKEND (SERVIDOR)

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// ROUTER
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;