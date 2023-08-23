import express from 'express';
//el enrutador principal va a llamar a TODOS los recursos y los va a enrutar
import userRouter from './users.js'
import citiesRouter from './cities.js'
import activitiesRouter from './activities.js'
import itinerariesRouter from './itineraries.js'

let router = express.Router();

//obligo al enrutador principal a usar las rutas del enrutador del recurso
router.use('/users', userRouter)
router.use('/cities', citiesRouter)
//router.use acepta COMO MINIMO DOS PARAMETROS para poder enrutar correctamente
  //1- la palabrita con la que se va a enrutar
  //2- el enrutador que tengo que conectar
router.use('/activities', activitiesRouter)
router.use('/itineraries', itinerariesRouter)
export default router;