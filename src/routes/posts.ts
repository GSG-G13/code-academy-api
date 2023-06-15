import express, { Router } from 'express';
import { deletePostController } from '../controllers';
import checkAuth from '../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.delete('/:id', deletePostController);

export default postsRouter;
