import { scheduleByFindAll } from '../controllers/schedule.js'
import express from 'express';
const router = express();

router.get('/', scheduleByFindAll);

export default router;
