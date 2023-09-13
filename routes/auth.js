import { Router } from 'express';

import register from '../controllers/auth/register.js';
import signin from '../controllers/auth/signin.js';
import token from '../controllers/auth/token.js';
import signout from '../controllers/auth/signout.js';

import validator from '../middlewares/validator.js';
import existsUser from '../middlewares/existsUser.js';
import isValidPass from '../middlewares/isValidPass.js'
import notExistsUser from '../middlewares/notExistsUser.js';
import isPassOk from '../middlewares/isPassOk.js';
import isValidToken from '../middlewares/isValidToken.js';
import passport from '../middlewares/passport.js';

import registerSchema from '../schemas/register.js';
import signinSchema from '../schemas/signin.js';

let router = Router()

router.post('/register', validator(registerSchema), existsUser, isValidPass, register)
router.post('/signin', validator(signinSchema), notExistsUser, isPassOk, isValidToken, signin)
router.post('/token', passport.authenticate("jwt", {session:false}), isValidToken, token)
router.post("/signout", passport.authenticate("jwt", {session:false}), signout);

export default router