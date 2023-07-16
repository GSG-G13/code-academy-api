import connection from '../../config/connection';
import { PostIdQueryArgs } from '../../../utils';

const getUserInfoQuery = ({ id }: PostIdQueryArgs) => {
  const sql = {
    text: `
      SELECT 
        users.id, users.full_name, users.username, users.avatar,
        TO_CHAR(users.date_of_birth, 'YYYY-MM-DD') AS DOB,
        users.gender, roles.name as role
      FROM users
          JOIN user_roles ON users.id = user_roles.user_id
          JOIN roles ON user_roles.role_id = roles.id
      WHERE users.id = $1
    `,
    values: [id],
  };
  return connection.query(sql);
};
export default getUserInfoQuery;
