import connection from '../../config/connection';

interface PostId {
  onePostId: number;
}

const getPostByIdQuery = ({ onePostId }: PostId) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [onePostId],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
