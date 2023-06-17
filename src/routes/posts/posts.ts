import express, { Router } from 'express';
import {
  getPostByIdController,
  getPostsCohortController,
  getPublicPostsController,
} from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getPublicPostsController);
postsRouter.get('/cohort/:cohortName', getPostsCohortController);
postsRouter.get('/:postId', getPostByIdController);

export default postsRouter;
