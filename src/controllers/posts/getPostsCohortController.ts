import { Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import { getCohortPostsQuery } from '../../database';
import { CohortParmRequest } from '../../utils/types';

const getPostsCohortController = async (
  req: CohortParmRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;
    const offset = (Number(page || 1) - 1) * 10;
    const { cohortId } = req.params;
    const id = +cohortId;
    const dataUser = req.user;
    const roles = dataUser?.roles;

    if (!roles || dataUser.isAdmin === true) {
      const { rows: posts, rowCount } = await getCohortPostsQuery({ id, offset });
      if (!rowCount) throw new CustomError('The cohort does not exist', 404);

      res.status(200).json({ message: 'Success', data: posts });
    } else {
      const findCohortAccess = roles.some((role) => role.cohort_id === id);

      if (!findCohortAccess) throw new CustomError('Unauthorized', 400);
      const { rows: posts, rowCount } = await getCohortPostsQuery({ id, offset });

      if (!rowCount) throw new CustomError('The cohort does not exist', 404);

      res.status(200).json({
        error: 'false',
        data: {
          message: 'Success',
          posts,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

export default getPostsCohortController;
