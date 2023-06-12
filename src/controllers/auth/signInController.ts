import { Request, Response } from 'express';
import loginSchema from '../../utils/validation';
import getUserByEmailQuery from '../../database';
import { comparePassword, signToken } from '../../utils';

interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const signInController = async (req: SignInRequest, res: Response) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync({ email, password });
    const { rows } = await getUserByEmailQuery({ email });
    if (!rows.length) {
      throw new Error('Invalid email or password');
    }
    const checkPassword = await comparePassword(password, rows[0].password);
    if (!checkPassword) {
      throw new Error('Invalid email or password');
    }
    const token = await signToken(
      {
        id: rows[0].id,
        username: rows[0].username,
        email: rows[0].email,
        avatar: rows[0].avatar,
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
            avatar: rows[0].avatar,
          },
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      error: true,
      data: {
        message: error.message,
      },
    });
  }
};

export default signInController;
