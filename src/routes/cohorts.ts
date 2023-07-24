import express, { Router } from 'express';
import { getSingleCohortController, getAllCohortsController } from '../controllers';
import checkAuth from '../middlewares';
import getMyCohortsController from '../controllers/cohorts/getMyCohortsController';

const userCohortsRouter: Router = express.Router();
userCohortsRouter.use(checkAuth);
userCohortsRouter.get('/', getAllCohortsController);
userCohortsRouter.get('/my', getMyCohortsController);

userCohortsRouter.get('/:id', getSingleCohortController);

export default userCohortsRouter;
