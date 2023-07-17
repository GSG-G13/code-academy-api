import { Response, NextFunction } from 'express';
import { CustomError, RequestWithDecoded } from '../../utils';
import { getUserInfoQuery } from '../../database';

const getPersonalInfoController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { id } = req.user;
    const { rows: userInfo } = await getUserInfoQuery({ id });

    res.status(200).json({
      error: false,
      data: {
        message: 'userInfo returned successfully',
        userInfo: userInfo[0],
      },
    });
  } catch (err) {
    next(err);
  }
};
export default getPersonalInfoController;
