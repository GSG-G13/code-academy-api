import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
const clientError = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: true,
    data: {
      message: '404 Error',
    },
  });
};

export default clientError;
