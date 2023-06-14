import express, { Router } from 'express';
import { addCohortController } from '../../controllers';
import checkAuth from '../../middlewares';

const cohortsRouter: Router = express.Router();

cohortsRouter.use(checkAuth);
cohortsRouter.post('/', addCohortController);

export default cohortsRouter;
