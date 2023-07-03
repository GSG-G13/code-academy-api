import express, { Router } from 'express';
import { addCommentController, getCommentsController } from '../controllers';
import checkAuth from '../middlewares';

const commentsRouter: Router = express.Router();

commentsRouter.use(checkAuth);
commentsRouter.get('/', getCommentsController);
commentsRouter.post('/', addCommentController);

export default commentsRouter;
