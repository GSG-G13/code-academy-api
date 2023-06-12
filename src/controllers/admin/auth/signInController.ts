import { Request, Response, NextFunction } from 'express';
import loginSchema from '../../../utils/validation';
import getUserByEmailQuery from '../../../database';
import { comparePassword, signToken } from '../../../utils';
import { CustomError } from '../../../utils/helpers';

interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const signInController = async (req: SignInRequest, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync({ email, password });
    const { rows } = await getUserByEmailQuery({ email });
    if (!rows.length) {
      throw new CustomError('Invalid email or password', 401);
    }
    const checkPassword = await comparePassword(password, rows[0].password);
    if (!checkPassword) {
      throw new CustomError('Invalid email or password', 401);
    }
    const token = await signToken(
      {
        id: rows[0].id,
        username: rows[0].username,
        email: rows[0].email,
      },
      {
        expiresIn: '1d',
      },
    );

    res
      .status(200)
      .cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 })
      .json({
        error: false,
        data: {
          message: 'Logged In Successfully',
          user: {
            id: rows[0].id,
            email: rows[0].email,
            username: rows[0].username,
          },
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    next(error);
  }
};

export default signInController;
