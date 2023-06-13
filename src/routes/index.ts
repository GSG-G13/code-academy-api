import express, { Router } from 'express';
import authRouter from './admin';

const router: Router = express.Router();

router.use('/auth', authRouter);

export default router;
