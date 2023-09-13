import express from 'express';

import userRouter from './users.js'
import citiesRouter from './cities.js'
import activitiesRouter from './activities.js'
import itinerariesRouter from './itineraries.js'
import authRouter from './auth.js'

let router = express.Router();

router.use('/users', userRouter)
router.use('/cities', citiesRouter)
router.use('/activities', activitiesRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/auth', authRouter)

export default router;