import { Response, NextFunction } from 'express';
import { RequestWithDecoded } from '../../utils';
import { getMembersQuery } from '../../database';

const getMembersController = async (req: RequestWithDecoded, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query;

    const offset = (Number(page || 1) - 1) * 10;
    const { rows: members } = await getMembersQuery({ offset });
    const countOfMembers = members.length;
    const pagination = {
      countOfMembers,
      currentPage: Number(page || 1),
      pages: Math.ceil(countOfMembers / 10),
    };

    res.status(200).json({
      error: false,
      data: {
        message: 'Success',
        members,
        pagination,
      },
    });
  } catch (error) {
    next(error);
  }
};
export default getMembersController;
