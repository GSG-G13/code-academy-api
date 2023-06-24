import { Response, NextFunction } from 'express';
import { RequestWithDecoded } from '../../utils';
import { getCountMembersQuery, getMembersQuery } from '../../database';

const getMembersController = async (req: RequestWithDecoded, res: Response, next: NextFunction) => {
  try {
    const { page } = req.query;

    const offset = (Number(page || 1) - 1) * 12;
    const { rows: members } = await getMembersQuery({ offset });
    const { rows: countOfMembers } = await getCountMembersQuery();
    const allMembersCount = countOfMembers[0].count;

    const pagination = {
      allMembersCount: Number(allMembersCount),
      currentPage: Number(page || 1),
      pages: Math.ceil(allMembersCount.length / 12),
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
