import { EditPost } from '../../../utils';
import connection from '../../config/connection';

const editPostQuery = ({ content, id }: EditPost) => {
  const sql = {
    text: 'UPDATE posts SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
    values: [content, id],
  };
  return connection.query(sql);
};

export default editPostQuery;
