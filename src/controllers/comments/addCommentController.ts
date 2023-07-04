import { Response, NextFunction } from 'express';
import { addCommentQuery, getPostByIdQuery } from '../../database';
import { AddCommentRequest, AddCommentSchema, CustomError } from '../../utils';

const addCommentController = async (req: AddCommentRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { content, postId } = req.body;
    await AddCommentSchema.validateAsync({ content, postId });

    const { isAdmin, roles, id: userId } = req.user;
    const { rows: posts } = await getPostByIdQuery({ id: postId });

    if (!posts.length) throw new CustomError('Post NOT FOUND', 404);
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

    const { rows: comment } = await addCommentQuery({ content, postId, userId });

    res.status(200).json({ error: false, data: { message: 'comment added success', comment } });
  } catch (err) {
    next(err);
  }
};

export default addCommentController;
