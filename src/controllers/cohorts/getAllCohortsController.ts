import { Request, Response, NextFunction } from 'express';
import { getAllCohortsQuery } from '../../database';

const getAllCohortsController = async (req: Request, res: Response, next: NextFunction) => {
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
