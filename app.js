// IMPORTS
import 'dotenv/config.js';              //importo UNICAMENTE la configuracion de las variables de entorno
import __dirname from './utils.js';           //importo la configuracion de la ubicacion del servidor (antes, con commonjs, venía pre-configurada)
import createError from 'http-errors';        //crea errores
import express from 'express';                //provee metodos y propiedades para levantar servidores
import path from 'path';                      //para conocer la ubicacion de nuestro servidor
// import cookieParser from 'cookie-parser';
import logger from 'morgan';                  //para registrar cada una de las peticiones
//var indexRouter from './routes/index'       //solo vamos a configurar las rutas del enrutador de back principal
import indexRouter from './routes/index.js';  //este enrutador va a llamar a TODOS los otros recursos (cities, itineraries, users)                                        
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors';

let app = express();  //ejecutando el modulo de express, creo una APP DE BACKEND (SERVIDOR)

// VIEW ENGINE SETUP
//SET es el metodo necesario para SETear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
//USE es el metodo necesario para obligar a mi aplicacion a que use la funcion CADA VEZ que se realiza una SOLICITUD/PETICION
app.use(logger('dev'));                                   //obligo al servidor a registrar una peticion en el modulo de logger/morgan
app.use(express.json());                                  //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: true }));         //obligo al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //obligo al servidor a usar los archivos estaticos de la carpeta PUBLIC
app.use(cors());

// ROUTER
app.use('/api', indexRouter);      //obligo al servidor a que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;