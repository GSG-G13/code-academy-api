import express, { Router } from 'express';
import { editPostController } from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.put('/:postId', editPostController);

export default postsRouter;
