import { Response, NextFunction } from 'express';
import { CustomError, RequestWithDecoded } from '../../utils';
import { getCountMyCohorts, getMyCohortsQuery } from '../../database';

const getMyCohortsControler = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { page } = req.query;
    const offset = (Number(page || 1) - 1) * 15;
    const { rows: cohorts } = await getMyCohortsQuery({ offset, userId: req.user.id });
    const { rows: countCohorts } = await getCountMyCohorts({ userId: req.user.id });
    const allCohortsCount = countCohorts[0].count;
    const pagination = {
      allCohortsCount,
      currentPage: Number(page || 1),
      pages: Math.ceil(allCohortsCount / 15),
    };
    res.status(200).json({
      error: false,
      data: {
        message: 'Success cohorts',
        cohorts,
        pagination,
      },
    });
  } catch (err) {
    next(err);
  }
};
export default getMyCohortsControler;
