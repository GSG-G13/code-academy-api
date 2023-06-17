import { PostIdQueryArgs } from '../../../utils';
import connection from '../../config/connection';

const getPostByIdQuery = ({ postId }: PostIdQueryArgs) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
