import { NextFunction, Response } from 'express';
import { getAllPostsByUserId, getCountPostsByUserIdQuery } from '../../database/query';
import { CustomError, RequestWithDecoded } from '../../utils';

const getAllPostsByUserIdController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { page } = req.query;
    const { id: userId } = req.user;
    const offset = (Number(page || 1) - 1) * 10;
    const { rows: posts } = await getAllPostsByUserId({ offset, userId });
    const { rows: countPosts } = await getCountPostsByUserIdQuery({ userId });
    const allPostsCount = countPosts[0].count;

    const pagination = {
      allPostsCount,
      currentPage: Number(page || 1),
      pages: Math.ceil(allPostsCount / 10),
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

export default getAllPostsByUserIdController;
