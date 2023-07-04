import { loginSchema, addUserSchema } from './auth';
import { addCohortSchema, getSingleCohortSchema } from './cohorts';
import { validateAddPostSchema, editPostSchema, deletePostSchema } from './posts';
import { AddCommentSchema, editCommentSchema } from './comments';
import validateLikes from './likes';
import validateGetSingleMember from './users';

export {
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
  validateGetSingleMember,
};
