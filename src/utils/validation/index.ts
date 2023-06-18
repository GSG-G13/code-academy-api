import { loginSchema, addUserSchema } from './auth';
import { addCohortSchema, getSingleCohortSchema } from './cohorts';
import { validateAddPostSchema, editPostSchema, deletePostSchema } from './posts';

export {
  loginSchema,
  addUserSchema,
  addCohortSchema,
  validateAddPostSchema,
  editPostSchema,
  deletePostSchema,
  getSingleCohortSchema,
};
