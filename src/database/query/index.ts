import { getUserByEmailQuery, getUserRoles } from './auth';
import { getAllCohortsQuery, getSingleCohortQuery } from './cohorts';
import {
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
  editPostQuery,
  getPostByIdQuery,
  deletePostQuery,
  addPostQuery,
  getCountPostsQuery,
} from './posts';
import { addLikeQuery, unlikeLikeQuery, checkQuery } from './likes';

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
  addPostQuery,
  editPostQuery,
  deletePostQuery,
  getPostByIdQuery,
  addLikeQuery,
  unlikeLikeQuery,
  checkQuery,
  getCountPostsQuery,
  getSingleCohortQuery,
  getAllCohortsQuery,
};
