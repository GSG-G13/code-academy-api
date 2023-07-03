import { loginSchema, addUserSchema } from './auth';
import { addCohortSchema, getSingleCohortSchema } from './cohorts';
import { validateAddPostSchema, editPostSchema, deletePostSchema } from './posts';
import validateLikes from './likes';
import AddCommentSchema from './comments';

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
};
