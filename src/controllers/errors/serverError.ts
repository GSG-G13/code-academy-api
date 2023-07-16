import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import { JsonWebTokenError } from 'jsonwebtoken';
import { CustomError } from '../../utils/helpers';

// eslint-disable-next-line no-unused-vars
const serverError = (err: CustomError, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(422).json({
      error: true,
      data: {
        message: 'Validation error',
        errors: err.details,
      },
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      error: true,
      data: {
        message: err.message,
      },
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.status).json({
      error: true,
      data: {
        message: err.message,
      },
    });
  }

  return res.status(500).json({
    error: true,
    data: {
      message: 'Internal Server Error',
    },
  });
};

export default serverError;
