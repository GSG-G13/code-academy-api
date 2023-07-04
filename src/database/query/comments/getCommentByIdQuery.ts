import connection from '../../config/connection';
import { CommentIdQuery } from '../../../utils';

const getCommentByIdQuery = ({ id }: CommentIdQuery) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

export default getCommentByIdQuery;
