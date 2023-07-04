import { DeleteComment } from '../../../utils';
import connection from '../../config/connection';

const deleteCommentQuery = ({ id }: DeleteComment) => {
  const sql = {
    text: 'DELETE FROM comments WHERE id = $1  RETURNING id',
    values: [id],
  };

  return connection.query(sql);
};

export default deleteCommentQuery;
