import { departmentFinAllController } from '../controllers/department.js';
import express from 'express';
const router = express();

router.get('/', departmentFinAllController);

export default router;