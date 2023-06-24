import connection from '../../config/connection';
import { LikeQuery } from '../../../utils';

const checkQuery = ({ userId, id }: LikeQuery) => {
  const sql = {
    text: 'SELECT * FROM likes WHERE user_id = $1 and post_id = $2;',
    values: [userId, id],
  };
  return connection.query(sql);
};
export default checkQuery;
