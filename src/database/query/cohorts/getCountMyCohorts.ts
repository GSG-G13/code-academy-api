import connection from '../../config';
import { getMyCohortsQueryArgs } from '../../../utils';

const getCountMyCohorts = ({ userId }: getMyCohortsQueryArgs) => {
  const sql = {
    text: `SELECT count(c.name)
  FROM
    cohorts c
  INNER JOIN
    user_roles ur ON c.id = ur.cohort_id
  INNER JOIN
    roles r ON ur.role_id = r.id
  WHERE
    ur.user_id =$1`,
    values: [userId],
  };
  return connection.query(sql);
};

export default getCountMyCohorts;
