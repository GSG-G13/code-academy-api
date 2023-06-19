import { loginSchema, addUserSchema } from './auth';
import { addCohortSchema, getSingleCohortSchema } from './cohorts';
import { validateAddPostSchema, editPostSchema, deletePostSchema } from './posts';
import validateLikes from './likes';

export {
  loginSchema,
  addUserSchema,
  addCohortSchema,
  validateAddPostSchema,
  editPostSchema,
  deletePostSchema,
  validateLikes,
  getSingleCohortSchema,
};
