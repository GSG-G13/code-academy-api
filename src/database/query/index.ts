import { getUserByEmailQuery, getUserRoles } from './auth';
import {
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
  editPostQuery,
  getPostByIdQuery,
  deletePostQuery,
  addPostQuery,
} from './posts';

import {
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
} from './admin';
import getAllCohortsQuery from './cohorts';

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
  addPostQuery,
  editPostQuery,
  deletePostQuery,
  getPostByIdQuery,
  getAllCohortsQuery,
};
