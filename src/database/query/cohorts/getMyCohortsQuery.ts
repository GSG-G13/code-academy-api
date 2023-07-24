import connection from '../../config';
import { getMyCohortsQueryArgs } from '../../../utils';

const getMyCohortsQuery = ({ offset, userId }: getMyCohortsQueryArgs) => {
  const sql = {
    text: `SELECT c.id, c.name AS cohort_name, COUNT(ur.user_id) AS members,
      c.thumbnail,
      TO_CHAR(c.start_date, 'YYYY-MM-DD') AS start_date,
      TO_CHAR(c.end_date, 'YYYY-MM-DD') AS end_date,
      r.name AS role_name
    FROM
      cohorts c
    INNER JOIN
      user_roles ur ON c.id = ur.cohort_id
    INNER JOIN
      roles r ON ur.role_id = r.id
    WHERE
      ur.user_id = $1
    GROUP BY c.id, c.name, c.thumbnail, c.start_date, c.end_date, r.name
    ORDER BY c.id
    LIMIT 15 OFFSET $2;`,
    values: [userId, offset],
  };
  return connection.query(sql);
};

export default getMyCohortsQuery;
