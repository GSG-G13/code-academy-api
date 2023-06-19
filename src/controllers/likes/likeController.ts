import { Response, NextFunction } from 'express';
import { addLikeQuery, checkQuery, unlikeLikeQuery, getPostByIdQuery } from '../../database';
import { validateLikes, LikeRequest, CustomError } from '../../utils';

const likeController = async (req: LikeRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const userId = req.user?.id;
    const { id } = req.params;
    await validateLikes.validateAsync({ id });
    const { rows: posts } = await getPostByIdQuery({ id: +id });
    if (posts.length === 0) {
      throw new CustomError('Post not found', 404);
    }

    const post = posts[0];
    const isAdmin = req.user?.isAdmin;
    const roles = req.user?.roles;

    if (
      !(
        !roles ||
        isAdmin === true ||
        post.is_public === true ||
        (post.is_public === false && roles.some((role) => role.cohort_id === post.cohort_id))
      )
    ) {
      throw new CustomError('Unauthorized', 401);
    }

    const { rows: isLike } = await checkQuery({ userId: +userId, id: +id });
    if (!isLike.length) {
      await addLikeQuery({ userId: +userId, id: +id });
      return res.status(201).json({
        error: false,
        data: {
          message: 'Liked added successfully',
        },
      });
    }

    await unlikeLikeQuery({ userId: +userId, id: +id });
    return res.status(200).json({
      error: false,
      data: {
        message: 'Liked removed successfully',
      },
    });
  } catch (error) {
    return next(error);
  }
};

export default likeController;
