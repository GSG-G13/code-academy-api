import connection from '../../config/connection';
import { MemberIdQueryArgs } from '../../../utils';

const getSingleMemberQuery = ({ memberId }: MemberIdQueryArgs) => {
  const sql = {
    text: `
      SELECT
        users.full_name,
        users.username,
        users.email,
        users.github,
        users.linkedin,
        users.avatar,
        TO_CHAR(users.date_of_birth, 'YYYY-MM-DD') AS date_of_birth,
        career_status.name AS career_status,
        users.gender,
        users.is_active,
        array_agg(user_roles.cohort_id) AS cohort_ids
      FROM
        users
      JOIN
        career_status ON users.career_status_id = career_status.id
      LEFT JOIN
        user_roles ON user_roles.user_id = users.id
      WHERE
        users.id = $1
      GROUP BY
        users.id,
        career_status.id
    `,
    values: [memberId],
  };
  return connection.query(sql);
};
export default getSingleMemberQuery;
