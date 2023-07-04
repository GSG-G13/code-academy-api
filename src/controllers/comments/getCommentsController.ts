import { NextFunction, Response } from 'express';
import { getCommentsQuery, getPostByIdQuery } from '../../database/query';
import { CustomError, RequestWithDecoded } from '../../utils';

const getCommentsController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);

    const { postId } = req.body;
    const { isAdmin, roles } = req.user;

    const { rows: posts } = await getPostByIdQuery({ id: +postId });
    if (!posts.length) throw new CustomError('Post NOT FOUND', 400);
    if (
      !(
        !roles ||
        isAdmin === true ||
        posts[0].is_public === true ||
        (posts[0].is_public === false &&
          roles.some((role) => role.cohort_id === posts[0].cohort_id))
      )
    ) {
      throw new CustomError('Unauthorized', 401);
    }

    const { rows: comments } = await getCommentsQuery({ postId: +postId });

    res.status(200).json({ error: false, data: { message: 'Success', comments } });
  } catch (err) {
    next(err);
  }
};

export default getCommentsController;
