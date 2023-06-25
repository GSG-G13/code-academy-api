import express, { Router } from 'express';
import checkAuth from '../middlewares';
import { getMembersController } from '../controllers';

const getMembersRouter: Router = express.Router();
getMembersRouter.use(checkAuth);
getMembersRouter.get('/', getMembersController);

export default getMembersRouter;
