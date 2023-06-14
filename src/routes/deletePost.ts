import express, { Router } from 'express';
import { deletePostController } from '../controllers';
import checkAuth from '../middlewares';

const deletePostRouter: Router = express.Router();

deletePostRouter.use(checkAuth);
deletePostRouter.post('/', deletePostController);

export default deletePostRouter;
