import { Request } from 'express';
import { User } from '../helpers';

interface AddUserRequest extends Request {
  body: {
    users: User[];
    cohortId: number;
    roleId: number;
  };
}

interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export { SignInRequest, AddUserRequest };
