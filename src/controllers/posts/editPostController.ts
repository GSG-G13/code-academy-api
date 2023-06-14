import { Response, NextFunction } from 'express';
import { editPostQuery, getPostByIdQuery } from '../../database';
import { CustomError, editPostSchema } from '../../utils';
import { EditPostRequest } from '../../utils/types';

const editPostController = async (req: EditPostRequest, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    const { rows } = await getPostByIdQuery({ onePostId: +postId });
    if (!rows.length) {
      throw new CustomError('Post is not exist', 400);
    }
    if (rows[0].user_id !== req.user?.id) {
      throw new CustomError('Unauthorized!', 401);
    }
    const { content, isPublic, cohortId } = req.body;
    await editPostSchema.validateAsync({ content, isPublic, cohortId }, { abortEarly: false });
    await editPostQuery({ content, postId: +postId });
    res.status(300).json({
      error: false,
      data: {
        message: 'Post edited Successfully!',
      },
    });
  } catch (error) {
    next(error);
  }
};

export default editPostController;
