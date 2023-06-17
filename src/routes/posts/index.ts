import express, { Router } from 'express';
import { deletePostController, editPostController } from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.put('/:id', editPostController);
postsRouter.delete('/:id', deletePostController);

export default postsRouter;
