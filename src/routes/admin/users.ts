import { Router } from 'express';

import addUser from '../../controllers';

const userRouter = Router();

userRouter.post('/users', addUser);

export default userRouter;
