import express, { Router } from 'express';
import {
  getCohortPostsController,
  getPublicPostsController,
} from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getPublicPostsController);
postsRouter.get('/cohort/:cohortName', getCohortPostsController);

export default postsRouter;
