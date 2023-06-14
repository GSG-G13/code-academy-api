import connection from '../../config/connection';

interface DeleltePost {
id:number;
}
const deletePostOuery = ({ id }:DeleltePost) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id = $1  RETURNING id',
    values: [id],
  };

  return connection.query(sql);
};

export default deletePostOuery;
