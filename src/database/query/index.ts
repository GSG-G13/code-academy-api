import { getMembersQuery, getCountMembersQuery, getSingleMemberQuery } from './users';
import { getUserByEmailQuery, getUserRoles } from './auth';
import {
  getAllCohortsQuery,
  getSingleCohortQuery,
  getCohortByIdQuery,
  getCountCohortsQuery,
  getMyCohortsQuery,
  getCountMyCohorts,
} from './cohorts';
import {
  getPublicPostsQuery,
  getCohortPostsQuery,
  getCohortIdByNameQuery,
  editPostQuery,
  getPostByIdQuery,
  deletePostQuery,
  addPostQuery,
  getCountPostsQuery,
  getAllPostsByUserId,
  getCountPostsByUserIdQuery,
} from './posts';
import { addLikeQuery, unlikeLikeQuery, checkQuery } from './likes';
import {
  createUserQuery,
  createUserRoleQuery,
  AddCohortQuery,
  getCohortByNameQuery,
} from './admin';
import {
  addCommentQuery,
  getCommentsQuery,
  getCommentByIdQuery,
  editCommentQuery,
  deleteCommentQuery,
} from './comments';

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
  getCohortByIdQuery,
  getMembersQuery,
  getCountMembersQuery,
  getAllPostsByUserId,
  getCountPostsByUserIdQuery,
  addCommentQuery,
  getCommentsQuery,
  getCommentByIdQuery,
  editCommentQuery,
  deleteCommentQuery,
  getSingleMemberQuery,
  getCountCohortsQuery,
  getCountMyCohorts,
  getMyCohortsQuery,
};
