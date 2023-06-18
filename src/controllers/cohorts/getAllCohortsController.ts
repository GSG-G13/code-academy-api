import { Response, NextFunction } from 'express';
import { getAllCohortsQuery } from '../../database';
import { RequestWithDecoded } from '../../utils';

const getAllCohortsController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { rows } = await getAllCohortsQuery();
    res.json({
      error: false,
      data: {
        message: 'cohorts retrieved Successfully',
        cohorts: rows,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getAllCohortsController;
