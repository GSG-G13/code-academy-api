import { signToken, verifyToken } from './jwt';
import { hashPassword, comparePassword, CustomError } from './helpers';
import {
  User,
  RoleType,
  JwtPayload,
  Decoded,
  RequestWithDecoded,
  Roles,
  AddCohort,
  CohortNameQueryArgs,
  AddPostQuery,
  AddPostRequest,
  EditPost,
  PostIdQueryArgs,
  LikeQuery,
  LikeRequest,
  GetSingleCohortQueryArgs,
  CohortIdQueryArgs,
  AddCommentRequest,
  CommentQuery,
  CommentsPostQuery,
  EditCommentRequest,
  CommentIdQuery,
  EditCommentQuery,
} from './types';
import {
  loginSchema,
  addUserSchema,
  addCohortSchema,
  validateAddPostSchema,
  editPostSchema,
  deletePostSchema,
  validateLikes,
  getSingleCohortSchema,
  AddCommentSchema,
  editCommentSchema,
} from './validation';

export {
  signToken,
  verifyToken,
  hashPassword,
  comparePassword,
  User,
  RoleType,
  JwtPayload,
  AddCohort,
  EditPost,
  loginSchema,
  addUserSchema,
  addCohortSchema,
  editPostSchema,
  deletePostSchema,
  validateAddPostSchema,
  getSingleCohortSchema,
  AddCommentSchema,
  validateLikes,
  editCommentSchema,
  CustomError,
  Decoded,
  RequestWithDecoded,
  Roles,
  CohortNameQueryArgs,
  PostIdQueryArgs,
  AddPostQuery,
  AddPostRequest,
  LikeQuery,
  LikeRequest,
  GetSingleCohortQueryArgs,
  CohortIdQueryArgs,
  AddCommentRequest,
  EditCommentRequest,
  CommentQuery,
  CommentsPostQuery,
  CommentIdQuery,
  EditCommentQuery,
};
