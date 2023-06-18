import { Response, NextFunction } from 'express';
import { addLikeQuery, checkQuery, unlikeLikeQuery, getPostByIdQuery } from '../../database';
import { validateLikes, LikeRequest, CustomError } from '../../utils';

const likeController = async (req: LikeRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const userId = req.user?.id;
    const { postId } = req.params;
    await validateLikes.validateAsync({ userId, postId: +postId });
    const { rows: posts } = await getPostByIdQuery({ id: +postId });
    if (posts.length === 0) {
      throw new CustomError('Post not found', 404);
    }

    const post = posts[0];
    const isAdmin = req.user?.isAdmin;
    const roles = req.user?.roles;

    if (
      !roles ||
      isAdmin === true ||
      post.is_public === true ||
      (post.is_public === false && roles.some((role) => role.cohort_id === post.cohort_id))
    ) {
      const { rows: isLike } = await checkQuery({ userId: +userId, postId: +postId });
      if (isLike.length === 0) {
        await addLikeQuery({ userId: +userId, postId: +postId });
        res.json({ message: 'Like added successfully' });
      } else {
        await unlikeLikeQuery({ userId: +userId, postId: +postId });
        res.json({ message: 'Like removed successfully' });
      }
    }
  } catch (error) {
    next(error);
  }
};

export default likeController;
