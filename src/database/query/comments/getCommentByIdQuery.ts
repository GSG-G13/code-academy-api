import connection from '../../config/connection';
import { CommentIdQuery } from '../../../utils';

const getCommentByIdQuery = ({ commentId }: CommentIdQuery) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE id = $1',
    values: [commentId],
  };
  return connection.query(sql);
};

export default getCommentByIdQuery;
