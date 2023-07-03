import express, { Router } from 'express';
import { addCommentController, editCommentController, getCommentsController } from '../controllers';
import checkAuth from '../middlewares';

const commentsRouter: Router = express.Router();

commentsRouter.use(checkAuth);
commentsRouter.get('/', getCommentsController);
commentsRouter.post('/', addCommentController);
commentsRouter.put('/', editCommentController);

export default commentsRouter;
