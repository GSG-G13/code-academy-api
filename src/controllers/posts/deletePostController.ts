import { NextFunction, Response } from 'express';
import { deletePostQuery, getPostByIdQuery } from '../../database';
import { CustomError, deletePostSchema } from '../../utils';
import { DeletePostRequest } from '../../utils/types/requests';

const deletePostController = async (req: DeletePostRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await deletePostSchema.validateAsync({ id });
    const { rowCount } = await getPostByIdQuery({ userId: +(id) });
    if (!rowCount) throw new CustomError('Post not found', 404);
    await deletePostQuery({ id: +(id) });
    res.status(200).json({
      data: {
        message: 'Post deleted successfully',
      },
    });
  } catch (err) {
    next(err);
  }
};

export default deletePostController;
