import { participantByFindAllController } from '../controllers/participant.js';
import express from 'express';
const router = express();

router.get('/', participantByFindAllController);

export default router;