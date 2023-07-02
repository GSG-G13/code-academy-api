import { Response, NextFunction } from 'express';
import { getAllCohortsQuery, getCountCohortsQuery } from '../../database';
import { RequestWithDecoded } from '../../utils';

const getAllCohortsController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;
    const offset = (Number(page || 1) - 1) * 10;
    const { rows: cohorts } = await getAllCohortsQuery({ offset });
    const { rows: countCohorts } = await getCountCohortsQuery();
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
export default getAllCohortsController;
