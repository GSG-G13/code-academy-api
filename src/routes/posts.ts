import express, { Router } from 'express';
import {
  getCohortPostsController,
  getPublicPostsController,
  deletePostController,
  editPostController,
  getSinglePostController, addPostController,
} from '../controllers';
import checkAuth from '../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getPublicPostsController);
postsRouter.get('/cohort/:cohortName', getCohortPostsController);
postsRouter.get('/:id', getSinglePostController);
postsRouter.post('/', addPostController);
postsRouter.put('/:id', editPostController);
postsRouter.delete('/:id', deletePostController);

export default postsRouter;
