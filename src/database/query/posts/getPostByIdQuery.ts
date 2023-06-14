import connection from '../../config/connection';

interface PostId {
  postId: number;
}

const getPostByIdQuery = ({ postId }: PostId) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
