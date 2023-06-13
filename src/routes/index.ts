import express, { Router } from 'express';
import { authRouter, userRouter } from './admin';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

export default router;
