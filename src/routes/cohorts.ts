import express, { Router } from 'express';
import { getAllCohortsController } from '../controllers';
import checkAuth from '../middlewares';

const userCohortsRouter: Router = express.Router();

userCohortsRouter.use(checkAuth);
userCohortsRouter.get('/', getAllCohortsController);

export default userCohortsRouter;
