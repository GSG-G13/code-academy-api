import { Response, NextFunction } from 'express';
import { RequestWithDecoded } from '../../../utils';

const logoutController = async (req: RequestWithDecoded, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token').json({
      error: false,
      data: {
        message: 'Logged Out Successfully',
      },
    });
  } catch (err) {
    next(err);
  }
};

export default logoutController;
