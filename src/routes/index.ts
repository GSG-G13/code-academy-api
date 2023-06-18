import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';
import postsRouter from './posts';
import userCohortsRouter from './cohorts';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);
router.use('/posts', postsRouter);
router.use('/cohorts', userCohortsRouter);

export default router;
