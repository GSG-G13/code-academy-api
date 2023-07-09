import { Request, Response, NextFunction } from 'express';
import { loginSchema } from '../../../utils/validation';
import { comparePassword, signToken } from '../../../utils';
import { CustomError } from '../../../utils/helpers';
import { getUserByEmailQuery } from '../../../database';

interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const signInController = async (req: SignInRequest, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync({ email, password }, { abortEarly: false });
    const { rows } = await getUserByEmailQuery({ email });
    if (!rows.length) {
      throw new CustomError('Invalid email or password', 401);
    }
    const checkPassword = await comparePassword(password, rows[0].password);
    if (!checkPassword) {
      throw new CustomError('Invalid email or password', 401);
    }
    const isAdmin = rows[0].role === 'Admin';
    const token = await signToken(
      {
        id: rows[0].id,
        username: rows[0].username,
        email: rows[0].email,
        isAdmin,
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
            isAdmin,
          },
        },
      });
  } catch (error) {
    next(error);
  }
};

export default signInController;
