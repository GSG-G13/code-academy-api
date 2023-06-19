import connection from '../../config/connection';

const getCountPostsQuery = () => {
  const sql = {
    text: 'SELECT COUNT(*) FROM posts',
  };
  return connection.query(sql);
};

export default getCountPostsQuery;
