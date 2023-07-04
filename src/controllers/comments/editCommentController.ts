import { Response, NextFunction } from 'express';
import { editCommentQuery, getCommentByIdQuery } from '../../database';
import { CustomError, editCommentSchema } from '../../utils';
import { EditCommentRequest } from '../../utils/types';

const editCommentController = async (
  req: EditCommentRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { id } = req.params;
    const { content } = req.body;
    await editCommentSchema.validateAsync({ content, id }, { abortEarly: false });

    const { rows: comment } = await getCommentByIdQuery({ id });

    if (!comment.length) {
      throw new CustomError('Comment NOT FOUND', 404);
    }
    if (comment[0].user_id !== req.user?.id) {
      throw new CustomError('Unauthorized', 401);
    }

    const { rows: editedComment } = await editCommentQuery({ content, id });
    res.status(300).json({
      error: false,
      data: {
        message: 'Comment edited Successfully!',
        comment: editedComment[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

export default editCommentController;
