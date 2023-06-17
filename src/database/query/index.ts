import { getUserByEmailQuery, getUserRoles } from './auth';
import {
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
} from './admin';
import { addPostQuery, editPostQuery, getPostByIdQuery, deletePostQuery } from './posts';

export {
  getUserByEmailQuery,
  getUserRoles,
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
  addPostQuery,
  editPostQuery,
  deletePostQuery,
  getPostByIdQuery,
};
