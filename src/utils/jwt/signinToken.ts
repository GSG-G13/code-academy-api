import { sign, SignOptions } from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';
import { JwtPayload } from '../types';

const signToken = async (payload: JwtPayload, options: SignOptions) =>
  new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY as string, { ...options }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });

export default signToken;
