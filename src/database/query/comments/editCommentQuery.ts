import { EditCommentQuery } from '../../../utils';
import connection from '../../config/connection';

const editCommentQuery = ({ content, id }: EditCommentQuery) => {
  const sql = {
    text: 'UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
    values: [content, id],
  };
  return connection.query(sql);
};

export default editCommentQuery;
