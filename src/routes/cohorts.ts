import express, { Router } from 'express';
import { getSingleCohortController } from '../controllers';
import checkAuth from '../middlewares';

const cohortRouter: Router = express.Router();
cohortRouter.use(checkAuth);
cohortRouter.get('/:id', getSingleCohortController);

export default cohortRouter;
