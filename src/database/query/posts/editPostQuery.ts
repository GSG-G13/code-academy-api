import { EditPost } from '../../../utils';
import connection from '../../config/connection';

const editPostQuery = ({ content, postId }: EditPost) => {
  const sql = {
    text: 'UPDATE posts SET content = $1 WHERE id = $2',
    values: [content, postId],
  };
  return connection.query(sql);
};

export default editPostQuery;
