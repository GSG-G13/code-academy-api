import { getUserByEmailQuery, getUserRoles } from './auth';
import {
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
  editPostQuery,
  getPostByIdQuery,
  deletePostQuery,
} from './posts';

import {
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
} from './admin';

export {
  getUserByEmailQuery,
  getUserRoles,
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
  editPostQuery,
  deletePostQuery,
  getPostByIdQuery,
};
