import { Router } from 'express';

import likeOrDislike from '../controllers/likes/likeOrDislike.js';
import read from '../controllers/likes/read.js';

import isLiked from '../middlewares/isLiked.js';
import passport from '../middlewares/passport.js'

const router = Router()

router.post('/', 
    passport.authenticate("jwt", { session: false }), //inyecta REQ.USER entonces user_id ahora está en req.user._id
    isLiked, likeOrDislike);
router.get('/', read);

export default router