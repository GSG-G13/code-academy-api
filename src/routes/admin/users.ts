import { Router } from 'express';

import { addUser } from '../../controllers';

const userRouter = Router();

userRouter.post('/', addUser);

export default userRouter;
