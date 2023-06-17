import { Response, NextFunction } from 'express';
import { editPostQuery, getPostByIdQuery } from '../../database';
import { CustomError, editPostSchema } from '../../utils';
import { EditPostRequest } from '../../utils/types';

const editPostController = async (req: EditPostRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { rows } = await getPostByIdQuery({ postId: +id });
    if (!rows.length) {
      throw new CustomError('Post is not exist', 400);
    }
    if (rows[0].user_id !== req.user?.id) {
      throw new CustomError('Unauthorized!', 401);
    }
    const { content } = req.body;
    await editPostSchema.validateAsync({ id, content }, { abortEarly: false });
    const { rows: post } = await editPostQuery({ content, id: +id });
    res.status(300).json({
      error: false,
      data: {
        message: 'Post edited Successfully!',
        post: post[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

export default editPostController;
