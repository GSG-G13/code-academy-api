import { PublicPostsQueryArgs } from '../../../utils/types';
import connection from '../../config/connection';

const getMembersQuery = ({ offset }: PublicPostsQueryArgs) => {
  const sql = {
    text: `
    SELECT
      users.id AS "userid",
      users.full_name AS "fullname",
      users.avatar,
      users.email AS "gmail",
      users.linkedin,
      users.github,
      cohorts.name AS "cohort",
      ARRAY_AGG(DISTINCT user_roles.role_id) AS "roles",
      ARRAY_AGG(DISTINCT career_status.name) AS "careerstate"
    FROM
      users
    JOIN
      user_roles ON users.id = user_roles.user_id
    JOIN
      cohorts ON user_roles.cohort_id = cohorts.id
    JOIN
      career_status ON users.career_status_id = career_status.id
    WHERE
      user_roles.role_id > 1
    GROUP BY
      users.id,
      cohorts.name
    OFFSET $1
    LIMIT 12;
    `,
    values: [offset],
  };
  return connection.query(sql);
};

export default getMembersQuery;
