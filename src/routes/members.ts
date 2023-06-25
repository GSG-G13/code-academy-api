import express, { Router } from 'express';
import checkAuth from '../middlewares';
import { getMembersController } from '../controllers';

const membersRouter: Router = express.Router();
membersRouter.use(checkAuth);
membersRouter.get('/', getMembersController);

export default membersRouter;
