import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);

export default router;
