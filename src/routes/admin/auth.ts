import express, { Router } from 'express';
import { logoutController, signInController } from '../../controllers';
import checkAuth from '../../middlewares';

const authRouter: Router = express.Router();

authRouter.post('/login', signInController);
authRouter.use(checkAuth);
authRouter.get('/logout', logoutController);

export default authRouter;
