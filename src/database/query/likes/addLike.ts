import connection from '../../config/connection';
import { LikeQuery } from '../../../utils';

const addLikeQuery = ({ userId, id }:LikeQuery) => {
  const sql = {
    text: 'INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *',
    values: [userId, id],
  };
  return connection.query(sql);
};

export default addLikeQuery;
