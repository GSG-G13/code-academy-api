import { Response, NextFunction } from 'express';
import { getSingleMemberQuery } from '../../database';
import { CustomError, RequestWithDecoded, validateGetSingleMember } from '../../utils';

const getSingleMemberController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await validateGetSingleMember.validateAsync({ id });
    const { rows, rowCount } = await getSingleMemberQuery({ memberId: +id });

    if (!rowCount) throw new CustomError('Member not found', 404);
    res.status(200).json({
      data: {
        message: 'Member returned successfully',
        member: { ...rows[0] },
      },
    });
  } catch (err) {
    next(err);
  }
};
export default getSingleMemberController;
