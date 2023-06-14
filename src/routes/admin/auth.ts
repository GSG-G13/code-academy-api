import express, { Router } from 'express';
import { signInController } from '../../controllers';

const authRouter: Router = express.Router();

authRouter.post('/login', signInController);

export default authRouter;
