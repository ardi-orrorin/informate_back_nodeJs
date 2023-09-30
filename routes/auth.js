import { login, logout, accountRegist } from '../controllers/auth.js';
import express from 'express';
import {isLoggedIn, isNotLoggedIn} from "../middlewares/index.js";
import {verifyToken} from "../jwt/tokenProvider.js";
const router = express();


router.post('/login', isNotLoggedIn, login);
router.post('/regist', isNotLoggedIn, accountRegist);
router.get('/logout', isLoggedIn, verifyToken, logout);

export default router;
