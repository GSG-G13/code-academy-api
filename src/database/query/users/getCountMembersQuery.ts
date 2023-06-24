import connection from '../../config/connection';

const getCountMembersQuery = () => {
  const sql = {
    text: 'SELECT COUNT(*) FROM users',
  };
  return connection.query(sql);
};

export default getCountMembersQuery;
