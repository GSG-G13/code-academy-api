import connection from '../../config/connection';

interface Args {
  id: number;
}

const getPostByIdQuery = ({ id }: Args) => {
  const sql = {
    text: 'SELECT * FROM posts WHERE  id= $1',
    values: [id],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
