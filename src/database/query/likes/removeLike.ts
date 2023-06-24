import connection from '../../config/connection';
import { LikeQuery } from '../../../utils';

const unlikeLikeQuery = ({ userId, id }:LikeQuery) => {
  const sql = {
    text: 'DELETE FROM likes WHERE user_id = $1 AND post_id = $2',
    values: [userId, id],
  };
  return connection.query(sql);
};

export default unlikeLikeQuery;
