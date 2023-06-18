import connection from '../../config/connection';

interface DeletePost {
  id: number;
}
const deletePostQuery = ({ id }: DeletePost) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id = $1  RETURNING id',
    values: [id],
  };

  return connection.query(sql);
};

export default deletePostQuery;
