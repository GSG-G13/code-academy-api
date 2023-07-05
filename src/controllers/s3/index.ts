import { Response, NextFunction } from 'express';
import { CustomError, RequestWithDecoded, createS3Client } from '../../utils';

const getUploadUrlController = async (
  req: RequestWithDecoded,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) throw new CustomError('Unauthorized', 401);
    const url = await createS3Client();
    res.status(201).json({
      error: false,
      data: {
        message: 'Success',
        url,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getUploadUrlController;
