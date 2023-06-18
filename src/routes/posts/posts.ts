import express, { Router } from 'express';
import {
  getCohortPostsController,
  getPublicPostsController,
  deletePostController,
  editPostController,
  getSinglePostController,
} from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getPublicPostsController);
postsRouter.get('/cohort/:cohortName', getCohortPostsController);
postsRouter.get('/cohort/:cohortName', getCohortPostsController);
postsRouter.get('/:postId', getSinglePostController);
postsRouter.put('/:id', editPostController);
postsRouter.delete('/:id', deletePostController);

export default postsRouter;
