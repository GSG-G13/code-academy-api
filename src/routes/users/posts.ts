import express, { Router } from 'express';
import { getPostsCohortController, getAllPostsCommunityController } from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getAllPostsCommunityController);
postsRouter.get('/:stringId', getPostsCohortController);

export default postsRouter;
