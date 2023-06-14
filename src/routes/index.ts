import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';
import postRouter from './posts';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);
router.use('/posts', postRouter);
export default router;
