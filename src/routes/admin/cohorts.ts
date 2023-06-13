import express, { Router } from 'express';
import { addCohortController } from '../../controllers';

const cohortsRouter: Router = express.Router();

cohortsRouter.post('/', addCohortController);

export default cohortsRouter;
