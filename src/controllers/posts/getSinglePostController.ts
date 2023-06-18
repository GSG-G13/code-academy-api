import { NextFunction, Response } from 'express';
import { getPostByIdQuery } from '../../database/query';
import { CustomError, RequestWithDecoded } from '../../utils';

const getPostByIdController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { postId } = req.params;
    const isAdmin = req.user?.isAdmin;
    const roles = req.user?.roles;

    const { rows: posts } = await getPostByIdQuery({ postId: +postId });
    if (!posts.length) throw new CustomError('NOT FOUND', 400);
    if (
      !(
        (!roles || isAdmin === true)
        || (posts[0].is_public === true)
        || (posts[0].is_public === false
        && roles.some((role) => role.cohort_id === posts[0].cohort_id))
      )) {
      throw new CustomError('NOT FOUND', 404);
    }
    res.status(200).json({ error: false, data: { message: 'Success', post: posts } });
  } catch (err) {
    next(err);
  }
};

export default getPostByIdController;
