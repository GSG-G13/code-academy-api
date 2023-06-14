import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';
import deletePostRouter from './deletePost';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);
router.use('/posts', deletePostRouter);

export default router;
