import connection from '../../config/connection';
import { GetSingleCohortQueryArgs } from '../../../utils/types';

const getSingleCohortQuery = ({ id }: GetSingleCohortQueryArgs) => {
  const sql = {
    // eslint-disable-next-line quotes
    text: `SELECT c.*, u.id, u.username, u.avatar FROM cohorts c
            JOIN user_roles ur ON c.id = ur.cohort_id
            JOIN users u ON ur.user_id = u.id
            WHERE c.id = 2
            group by c.id, u.id`,
    values: [id],
  };

  return connection.query(sql);
};

export default getSingleCohortQuery;
