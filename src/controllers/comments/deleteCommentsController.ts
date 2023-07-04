import { Response, NextFunction } from 'express';
import { deleteCommentQuery, getCommentByIdQuery } from '../../database';
import { CustomError, deleteCommentSchema } from '../../utils';
import { DeleteCommentRequest } from '../../utils/types';

const deleteCommentsController = async (
  req: DeleteCommentRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);

    const { id } = req.params;
    await deleteCommentSchema.validateAsync({ id });

    const { rows: comment } = await getCommentByIdQuery({ id });

    if (!comment.length) {
      throw new CustomError('Comment NOT FOUND', 404);
    }
    if (comment[0].user_id !== req.user?.id) {
      throw new CustomError('Unauthorized', 401);
    }

    const { rows: deletedCommentId } = await deleteCommentQuery({ id });
    res.status(200).json({
      error: false,
      data: {
        message: 'Comment deleted Successfully!',
        comment: deletedCommentId[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

export default deleteCommentsController;
