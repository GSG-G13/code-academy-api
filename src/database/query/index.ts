import { getUserByEmailQuery, getUserRoles } from './auth';
import {
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
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
};
