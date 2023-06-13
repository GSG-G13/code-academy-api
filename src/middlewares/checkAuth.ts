import { Response, NextFunction } from 'express';
import { CustomError, Decoded, RequestWithDecoded, verifyToken } from '../utils';
import { getUserRoles } from '../database/query';

const checkAuth = async (req: RequestWithDecoded, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  try {
    if (!token) {
      throw new CustomError('Unauthenticated', 403);
    }
    const decoded: Decoded = await verifyToken(token);
    const { id } = decoded;
    const userRoles = await getUserRoles({ id });

    if (userRoles.rows[0].role_id !== 1) {
      decoded.isAdmin = false;
      decoded.roles = userRoles.rows;
    } else {
      decoded.isAdmin = true;
    }

    req.user = decoded;

    next();
  } catch (err) {
    next(err);
  }
};

export default checkAuth;
