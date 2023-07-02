import connection from '../../config/connection';

const getCountCohortsQuery = () => {
  const sql = {
    text: 'SELECT COUNT(*) FROM cohorts',
  };
  return connection.query(sql);
};
export default getCountCohortsQuery;
