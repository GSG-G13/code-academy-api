import connection from '../../config/connection';
import { GetSingleCohortQueryArgs } from '../../../utils';

const getSingleCohortQuery = ({ id }: GetSingleCohortQueryArgs) => {
  const sql = {
    // eslint-disable-next-line quotes
    text: `SELECT cohorts.id, cohorts.name, cohorts.thumbnail,
    json_agg(json_build_object('id', users.id, 'username', users.username, 'avatar', users.avatar)) AS members
    FROM cohorts
    JOIN user_roles ON cohorts.id = user_roles.cohort_id
    JOIN users ON user_roles.user_id = users.id
    WHERE cohorts.id = $1
    GROUP BY cohorts.id, cohorts.name, cohorts.thumbnail;`,
    values: [id],
  };

  return connection.query(sql);
};

export default getSingleCohortQuery;
