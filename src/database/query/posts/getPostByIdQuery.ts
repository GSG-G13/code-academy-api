import { PostIdQueryArgs } from '../../../utils';
import connection from '../../config/connection';

const getPostByIdQuery = ({ id }: PostIdQueryArgs) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
