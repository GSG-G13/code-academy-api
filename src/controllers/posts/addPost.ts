import { Response, NextFunction } from 'express';
import { addPostQuery } from '../../database';
import { validateAddPostSchema, AddPostRequest, CustomError } from '../../utils';

const addPostController = async (req: AddPostRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);

    const { content, image, isPublic, cohortId } = req.body;

    await validateAddPostSchema.validateAsync({ content, isPublic, cohortId });
    const { id, roles, isAdmin } = req.user;
    if (!isAdmin
      && (roles === undefined || !roles.some((role) => role.cohort_id === cohortId))
      && !isPublic
    ) {
      throw new CustomError('Unauthorized', 401);
    }

    const { rows } = await addPostQuery({
      userId: id,
      content,
      image,
      isPublic,
      cohortId: isPublic ? null : cohortId,
    });

    res.status(200).json({ message: 'post added success', post: rows });
  } catch (err) {
    next(err);
  }
};

export default addPostController;
