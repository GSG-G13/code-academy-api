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

interface CohortParmRequest extends RequestWithDecoded {
  params: { cohortName: string };
}

interface AddPostRequest extends RequestWithDecoded {
  body: {
    content: string;
    image?: string;
    isPublic: boolean;
    cohortId?: number;
  };
}

interface AddCommentRequest extends RequestWithDecoded {
  body: {
    content: string;
    postId: number;
    cohortId: number;
  };
}

interface EditPostRequest extends RequestWithDecoded {
  body: {
    content: string;
  };
  params: {
    id: string;
  };
}

interface EditCommentRequest extends RequestWithDecoded {
  body: {
    content: string;
    postId: number;
    commentId: number;
  };
}

interface DeleteCommentRequest extends RequestWithDecoded {
  body: {
    commentId: number;
  };
}
interface DeletePostRequest extends RequestWithDecoded {
  params: {
    id: string;
  };
}
interface getSingleCohortRequest extends RequestWithDecoded {
  params: {
    id: string;
  };
}

interface LikeRequest extends RequestWithDecoded {
  params: {
    id: string;
  };
}

export {
  SignInRequest,
  AddUserRequest,
  RequestWithDecoded,
  AddCohortRequest,
  AddPostRequest,
  EditPostRequest,
  DeletePostRequest,
  CohortParmRequest,
  LikeRequest,
  getSingleCohortRequest,
  AddCommentRequest,
  EditCommentRequest,
  DeleteCommentRequest,
};
