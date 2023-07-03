import express, { Router } from 'express';
import { addCommentController, deleteCommentsController, editCommentController, getCommentsController } from '../controllers';
import checkAuth from '../middlewares';

const commentsRouter: Router = express.Router();

commentsRouter.use(checkAuth);
commentsRouter.get('/', getCommentsController);
commentsRouter.post('/', addCommentController);
commentsRouter.put('/', editCommentController);
commentsRouter.delete('/', deleteCommentsController);

export default commentsRouter;
