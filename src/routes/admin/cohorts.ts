import express, { Router } from 'express';
import { addCohortController, getAllCohortsController } from '../../controllers';
import checkAuth from '../../middlewares';

const cohortsRouter: Router = express.Router();

cohortsRouter.use(checkAuth);
cohortsRouter.post('/', addCohortController);
cohortsRouter.get('/', getAllCohortsController);

export default cohortsRouter;
