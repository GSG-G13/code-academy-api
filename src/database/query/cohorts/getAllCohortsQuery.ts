import connection from '../../config';
import { AllCohortsQueryArgs } from '../../../utils';

const getAllCohortsQuery = ({ offset }: AllCohortsQueryArgs) => {
  const sql = {
    text: `SELECT c.id, c.name, c.thumbnail, COUNT(u.user_id) AS members 
           FROM cohorts c 
           LEFT JOIN user_roles u ON c.id = u.cohort_id 
           GROUP BY c.id, c.name, c.thumbnail
           LIMIT 15 OFFSET $2;`,
    values: [offset],
  };
  return connection.query(sql);
};

export default getAllCohortsQuery;
