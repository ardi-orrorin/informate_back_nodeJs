import { calendarByFindAll } from '../controllers/calendar.js';
import express from 'express';
const router = express();


router.get('/', calendarByFindAll);

export default router;
