import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';
import checkAuth from '../middlewares';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use(checkAuth);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);

export default router;
