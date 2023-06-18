import { NextFunction, Response } from 'express';
import { getPublicPostsQuery } from '../../database/query';
import { RequestWithDecoded } from '../../utils';

const getPublicPostsController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;

    const offset = (Number(page || 1) - 1) * 10;
    const allData = await getPublicPostsQuery({ offset });
    const Posts = allData.rows;

    res.status(201).json({
      error: 'false',
      data: {
        message: 'Success',
        posts: Posts,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getPublicPostsController;
