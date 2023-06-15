import { NextFunction, Response } from 'express';
import { deletePostQuery, getPostByIdQuery } from '../../database';
import { CustomError, deletePostSchema } from '../../utils';
import { DeletePostRequest } from '../../utils/types/requests';

const deletePostController = async (req: DeletePostRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const { id } = req.params;
    const { id: userId } = req.user;
    await deletePostSchema.validateAsync({ id });
    const { rows, rowCount } = await getPostByIdQuery({ id: +id });
    if (!rowCount) throw new CustomError('Post not found', 404);
    if (rows[0].user_id !== userId) throw new CustomError('Unauthorized', 401);
    const { rows: deleted } = await deletePostQuery({ id: +id });
    res.status(200).json({
      data: {
        message: 'Post deleted successfully',
        deletedPost: { ...deleted[0] },
      },
    });
  } catch (err) {
    next(err);
  }
};

export default deletePostController;
