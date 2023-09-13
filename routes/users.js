import express from 'express';

import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

import passport from '../middlewares/passport.js';
import updatePassHash from '../middlewares/updatePassHash.js';

let router = express.Router();

//CREATE
router.post('/signup', create);

//GET
router.get('/', read);
router.get('/:id', readOne);

//UPDATE
router.put('/', passport.authenticate("jwt", {session:false}), updatePassHash, update);

//DESTROY
router.delete('/:id', destroy);

export default router;