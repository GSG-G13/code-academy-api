import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';
import { Decoded } from '../types';

const verifyToken = async (token: string): Promise<Decoded> =>
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY as string, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded as Decoded);
    });
  });

export default verifyToken;
