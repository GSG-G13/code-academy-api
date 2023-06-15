import { Request } from 'express';
import { Decoded, User } from '../helpers';

interface RequestWithDecoded extends Request {
  user?: Decoded;
}

interface AddUserRequest extends RequestWithDecoded {
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

interface AddCohortRequest extends RequestWithDecoded {
  body: {
    name: string;
    thumbnail: string;
    startDate: Date;
    endDate: Date;
  };
}

interface EditPostRequest extends RequestWithDecoded {
  body: {
    content: string;
  };
  params: {
    postId: string;
  };
}

export { SignInRequest, AddUserRequest, RequestWithDecoded, AddCohortRequest, EditPostRequest };
