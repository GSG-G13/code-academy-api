import connection from '../../config/connection';

interface Args {
  userId: number;
}

const getPostByIdQuery = ({ userId }: Args) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE  user_id = $1',
    values: [userId],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
