import express, { Router } from 'express';
import { likeController } from '../controllers';
import checkAuth from '../middlewares';

const likesRouter: Router = express.Router();

likesRouter.use(checkAuth);
likesRouter.post('/:postId', likeController);

export default likesRouter;
