import { Response, NextFunction } from 'express';
import { CustomError, addCohortSchema } from '../../../utils';
import { AddCohortQuery, getCohortByNameQuery } from '../../../database';
import { AddCohortRequest } from '../../../utils/types/requests';

const addCohortController = async (req: AddCohortRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.isAdmin) throw new CustomError('Unauthorized', 401);

    const { name, thumbnail, startDate, endDate } = req.body;
    await addCohortSchema.validateAsync({ name, startDate, endDate }, { abortEarly: false });
    const { rows: cohortId } = await getCohortByNameQuery({ name: name.toLowerCase() });
    if (cohortId.length) {
      throw new CustomError('Cohort name is already exists', 400);
    }
    await AddCohortQuery({ name: name.toLowerCase(), thumbnail, startDate, endDate });
    res.status(200).json({
      error: false,
      data: {
        message: 'Cohort created successfully!',
      },
    });
  } catch (error) {
    next(error);
  }
};

export default addCohortController;
