import connection from '../../config/connection';

interface CountPostsByUserId {
  userId: number;
}

const getCountPostsByUserIdQuery = ({ userId }: CountPostsByUserId) => {
  const sql = {
    text: 'SELECT COUNT(*) FROM posts WHERE posts.user_id = $1',
    values: [userId],
  };
  return connection.query(sql);
};

export default getCountPostsByUserIdQuery;
