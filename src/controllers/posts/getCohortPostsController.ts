import { Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import { getCohortIdByNameQuery, getCohortPostsQuery } from '../../database';
import { CohortParmRequest } from '../../utils/types';

const getCohortPostsController = async (
  req: CohortParmRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { page } = req.query;
    const offset = (Number(page || 1) - 1) * 10;
    const { cohortName } = req.params;
    const roles = req.user?.roles;

    // eslint-disable-next-line max-len
    const { rows, rowCount } = await getCohortIdByNameQuery({ cohortName: cohortName.toLowerCase() });
    if (!rowCount) {
      throw new CustomError('The cohort does not exist', 404);
    }
    const { id } = rows[0];

    if (!((!roles || req.user?.isAdmin === true) || roles.some((role) => role.cohort_id === id))) throw new CustomError('Unauthorized', 401);
    const { rows: posts } = await getCohortPostsQuery({ id, offset });
    res.status(200).json({ message: 'Success', data: posts });
  } catch (err) {
    next(err);
  }
};

export default getCohortPostsController;
