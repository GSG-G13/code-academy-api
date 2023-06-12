import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
const clientError = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: true,
    data: {
      message: 'Bad Request',
    },
  });
};

export default clientError;
