import { Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import { getAllPostsCohortQuery } from '../../database';
import { GetCohortPostsRequest } from '../../utils/types';

const getPostsCohortController = async (
  req: GetCohortPostsRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { stringId } = req.params;
    const id = +stringId;
    const dataUser = req.user;
    const roles = dataUser?.roles;

    if (!roles || dataUser.isAdmin === true) {
      const { rows, rowCount } = await getAllPostsCohortQuery({ id });
      if (!rowCount) throw new CustomError('The cohort does not exist', 404);

      return res.status(200).json({ message: 'Success', data: rows });
    }

    const findCohortAccess = roles.filter((role) => role.cohort_id === id);
    if (!findCohortAccess.length) throw new CustomError('Unauthorized', 400);
    const { rows, rowCount } = await getAllPostsCohortQuery({ id });
    if (!rowCount) throw new CustomError('The cohort does not exist', 404);

    return res.status(200).json({ message: 'Success', data: rows });
  } catch (err) {
    return next(err);
  }
};

export default getPostsCohortController;
