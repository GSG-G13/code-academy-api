import express, { Router } from 'express';
import { getSingleCohortController } from '../controllers';
import checkAuth from '../middlewares';

const userCohortsRouter: Router = express.Router();
userCohortsRouter.use(checkAuth);
userCohortsRouter.get('/:id', getSingleCohortController);

export default userCohortsRouter;
