import express, { Router } from 'express';
import { getPostsCohortController, getPublicPostsController } from '../../controllers';
import checkAuth from '../../middlewares';

const postsRouter: Router = express.Router();

postsRouter.use(checkAuth);
postsRouter.get('/', getPublicPostsController);
postsRouter.get('/cohort/:cohortId', getPostsCohortController);

export default postsRouter;
