import express, { Router } from 'express';
import { getSingleCohortController, getAllCohortsController } from '../controllers';
import checkAuth from '../middlewares';
import getMyCohortsControler from '../controllers/cohorts/getMyCohortsControler';

const userCohortsRouter: Router = express.Router();
userCohortsRouter.use(checkAuth);
userCohortsRouter.get('/', getAllCohortsController);
userCohortsRouter.get('/my', getMyCohortsControler);

userCohortsRouter.get('/:id', getSingleCohortController);

export default userCohortsRouter;
