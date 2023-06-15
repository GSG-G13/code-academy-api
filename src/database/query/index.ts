import { getUserByEmailQuery, getUserRoles } from './auth';
import { getAllPostsCommunityQuery, getAllPostsCohortQuery } from './posts';
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
  getAllPostsCommunityQuery,
  getAllPostsCohortQuery,
};
