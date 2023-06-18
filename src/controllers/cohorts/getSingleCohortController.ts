import { Response, NextFunction } from 'express';
import { getSingleCohortQuery } from '../../database';
import { CustomError, RequestWithDecoded } from '../../utils';
import { getSingleCohortSchema } from '../../utils';

const getSingleCohortController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await getSingleCohortSchema.validateAsync({ id });
    const { rows, rowCount } = await getSingleCohortQuery({ id: +id });

    if (!rowCount) throw new CustomError('Cohort not found', 404);

    res.status(200).json({
      data: {
        message: 'Cohort retrieved successfully',
        cohort: { ...rows[0] },
      },
    });
  } catch (err) {
    next(err);
  }
};
export default getSingleCohortController;
