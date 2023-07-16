import express, { Router } from 'express';
import { getAllPostsByUserIdController, getPersonalInfo } from '../controllers';
import checkAuth from '../middlewares';

const profileRouter: Router = express.Router();

profileRouter.use(checkAuth);
profileRouter.get('/', getPersonalInfo);
profileRouter.get('/posts', getAllPostsByUserIdController);

export default profileRouter;
