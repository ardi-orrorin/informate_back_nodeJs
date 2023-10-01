import { memberByFindAllController } from '../controllers/member.js';
import express from 'express';
const router = express();


router.get('/', memberByFindAllController);

export default router;