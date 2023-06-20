import express, { Router } from 'express';
import { getSingleCohortController, getAllCohortsController } from '../controllers';
import checkAuth from '../middlewares';

const userCohortsRouter: Router = express.Router();
userCohortsRouter.use(checkAuth);
userCohortsRouter.get('/', getAllCohortsController);
userCohortsRouter.get('/:id', getSingleCohortController);

export default userCohortsRouter;