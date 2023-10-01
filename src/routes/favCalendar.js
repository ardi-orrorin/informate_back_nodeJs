import { favCalendarFindAllController } from '../controllers/favCalendar.js';
import express from 'express';
const router = express();

router.get('/', favCalendarFindAllController);

export default router;