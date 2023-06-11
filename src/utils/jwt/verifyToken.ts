import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

const verifyToken = async (token:string) => new Promise((resolve, reject) => {
  verify(token, SECRET_KEY as string, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});

export default verifyToken;
