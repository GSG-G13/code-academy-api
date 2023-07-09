import express, { Router } from 'express';
import { authRouter, userRouter, cohortsRouter } from './admin';
import postsRouter from './posts';
import likesRouter from './likes';
import commentsRouter from './comments';
import userCohortsRouter from './cohorts';
import membersRouter from './members';
import profileRouter from './profile';
import s3Router from './uploadS3Image';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cohorts', cohortsRouter);
router.use('/posts', postsRouter);
router.use('/likes', likesRouter);
router.use('/comments', commentsRouter);
router.use('/cohorts', userCohortsRouter);
router.use('/members', membersRouter);
router.use('/profile', profileRouter);
router.use('/s3', s3Router);

export default router;
