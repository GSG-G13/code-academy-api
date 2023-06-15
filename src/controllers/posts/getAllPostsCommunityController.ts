import { NextFunction, Response } from 'express';
import { getAllPostsCommunityQuery } from '../../database/query';
import { RequestWithDecoded } from '../../utils';

const getAllPostsCommunityController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allData = await getAllPostsCommunityQuery();
    const data = allData.rows;

    res.status(201).json({
      message: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};

export default getAllPostsCommunityController;
