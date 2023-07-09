import connection from '../../config/connection';
import { CommentsPostQuery } from '../../../utils';

const getCommentsQuery = ({ postId }: CommentsPostQuery) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

export default getCommentsQuery;
