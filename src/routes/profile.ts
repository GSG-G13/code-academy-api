import express, { Router } from 'express';
import { getAllPostsByUserIdController } from '../controllers';
import checkAuth from '../middlewares';

const profileRouter: Router = express.Router();

profileRouter.use(checkAuth);
profileRouter.get('/posts', getAllPostsByUserIdController);

export default profileRouter;
