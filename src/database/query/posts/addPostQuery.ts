import connection from '../../config';
import { AddPostQuery } from '../../../utils';

const addPostQuery = ({ userId, content, image, isPublic, cohortId }:AddPostQuery) => {
  const sql = {
    text: 'INSERT INTO posts (user_id, content, image, is_public, cohort_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [userId, content, image, isPublic, cohortId],
  };
  return connection.query(sql);
};

export default addPostQuery;
