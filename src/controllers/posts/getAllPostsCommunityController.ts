import { NextFunction, Response } from 'express';
import { getAllPostsCommunityQuery } from '../../database/query';
import { RequestWithDecoded } from '../../utils';

const getAllPostsCommunityController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;

    const offset = (Number(page || 1) - 1) * 10;
    const allData = await getAllPostsCommunityQuery({ offset });
    const data = allData.rows;

    res.status(201).json({
      error: 'false',
      data: {
        message: 'Success',
        posts: data,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getAllPostsCommunityController;
