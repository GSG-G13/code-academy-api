import connection from '../../config/connection';
import { CommentQuery } from '../../../utils';

const addCommentQuery = ({ content, postId, userId }: CommentQuery) => {
  const sql = {
    text: 'INSERT INTO comments (content, user_id, post_id) VALUES ($1, $2, $3) RETURNING *',
    values: [content, userId, postId],
  };
  return connection.query(sql);
};

export default addCommentQuery;
