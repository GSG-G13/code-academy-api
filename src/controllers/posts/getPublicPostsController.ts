import { NextFunction, Response } from 'express';
import { getCountPostsQuery, getPublicPostsQuery } from '../../database/query';
import { RequestWithDecoded } from '../../utils';

const getPublicPostsController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;

    const offset = (Number(page || 1) - 1) * 10;
    const { rows: posts } = await getPublicPostsQuery({ offset });
    const { rows: countPosts } = await getCountPostsQuery();
    const allPostsCount = countPosts[0].count;

    const pagination = {
      allPostsCount,
      currentPage: Number(page || 1),
      pages: Math.ceil(allPostsCount / 15),
    };

    res.status(201).json({
      error: false,
      data: {
        message: 'Success',
        posts,
        pagination,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getPublicPostsController;
