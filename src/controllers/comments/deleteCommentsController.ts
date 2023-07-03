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

    const { commentId } = req.body;
    await deleteCommentSchema.validateAsync({ commentId });

    const { rows: comment } = await getCommentByIdQuery({ commentId });

    if (!comment.length) {
      throw new CustomError('NOT FOUND', 404);
    }
    if (comment[0].user_id !== req.user?.id) {
      throw new CustomError('NOT FOUND', 404);
    }

    const { rows: deletedCommentId } = await deleteCommentQuery({ commentId });
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
