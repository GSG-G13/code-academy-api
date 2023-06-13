import { Router } from 'express';

import { addUsersController } from '../../controllers';

const userRouter = Router();

userRouter.post('/', addUsersController);

export default userRouter;
