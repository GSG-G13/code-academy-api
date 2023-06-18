import connection from '../../config';

const getAllCohortsQuery = () => {
  const sql = {
    text: 'SELECT c.id, c.name, c.thumbnail, COUNT(u.user_id) AS members FROM cohorts c INNER JOIN user_roles u ON c.id = u.cohort_id GROUP BY c.id, c.name, c.thumbnail;',
  };
  return connection.query(sql);
};

export default getAllCohortsQuery;
