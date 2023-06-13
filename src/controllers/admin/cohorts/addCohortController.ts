import { Request, Response, NextFunction } from 'express';
import { CustomError, addCohortSchema } from '../../../utils';
import { AddCohortQuery, getCohortByNameQuery } from '../../../database';

interface AddCohortRequest extends Request {
  body: {
    name: string;
    thumbnail: string;
    startDate: Date;
    endDate: Date;
  };
}

const addCohortController = async (req: AddCohortRequest, res: Response, next: NextFunction) => {
  const { name, thumbnail, startDate, endDate } = req.body;
  try {
    await addCohortSchema.validateAsync({ name, startDate, endDate }, { abortEarly: false });
    const { rows } = await getCohortByNameQuery({ name });
    if (rows.length) {
      throw new CustomError('Cohort name is already exists', 400);
    }
    await AddCohortQuery({ name, thumbnail, startDate, endDate });
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
