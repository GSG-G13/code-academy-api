import express, { Router } from 'express';
import checkAuth from '../middlewares';
import { getMembersController, getSingleMemberController } from '../controllers';

const membersRouter: Router = express.Router();
membersRouter.use(checkAuth);
membersRouter.get('/', getMembersController);
membersRouter.get('/:id', getSingleMemberController);

export default membersRouter;
