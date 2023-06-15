import express, { Router } from 'express';
import { addPostController } from '../controllers';
import checkAuth from '../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.post('/', addPostController);

export default postsRouter;
