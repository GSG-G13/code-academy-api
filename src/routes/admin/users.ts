import { Router } from 'express';

import { addUsersController } from '../../controllers';
import checkAuth from '../../middlewares';

const userRouter = Router();

userRouter.use(checkAuth);
userRouter.post('/', addUsersController);

export default userRouter;
