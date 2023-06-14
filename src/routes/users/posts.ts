import express, { Router } from 'express';
import { getAllPostsController } from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getAllPostsController);

export default postsRouter;
