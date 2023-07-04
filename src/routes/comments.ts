import express, { Router } from 'express';
import { commentController } from '../controllers';
import checkAuth from '../middlewares';

const commentsRouter: Router = express.Router();

commentsRouter.use(checkAuth);
commentsRouter.post('/', commentController);

export default commentsRouter;
