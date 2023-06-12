import express, { Router } from 'express';
import signInController from '../../controllers';

const authRouter: Router = express.Router();

authRouter.post('/signin', signInController);

export default authRouter;
