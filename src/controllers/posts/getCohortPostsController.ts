import { Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import { getCohortIdByNameQuery, getCohortPostsQuery, getCountPostsQuery } from '../../database';
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

    const { rows, rowCount } = await getCohortIdByNameQuery({
      cohortName: cohortName.toLowerCase(),
    });
    if (!rowCount) {
      throw new CustomError('The cohort does not exist', 404);
    }
    const { id } = rows[0];

    if (!(!roles || req.user?.isAdmin === true || roles.some((role) => role.cohort_id === id))) {
      throw new CustomError('Unauthorized', 401);
    }
    const { rows: posts } = await getCohortPostsQuery({ id, offset });
    const { rows: countPosts } = await getCountPostsQuery();
    const allPostsCount = countPosts[0].count;

    const pagination = {
      allPostsCount,
      currentPage: Number(page || 1),
      pages: Math.ceil(allPostsCount / 10),
    };

    res.status(201).json({
      error: false,
      data: {
        message: 'Success',
        posts,
        pagination,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getCohortPostsController;
