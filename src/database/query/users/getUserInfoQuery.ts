import connection from '../../config/connection';
import { PostIdQueryArgs } from '../../../utils';

const getUserInfoQuery = ({ id }: PostIdQueryArgs) => {
  const sql = {
    text: `
    SELECT 
      users.id, users.full_name, users.username, users.avatar, TO_CHAR(users.date_of_birth, 'YYYY-MM-DD') AS DOB, users.gender, career_status.name as role
    FROM 
      users
    JOIN 
      career_status ON users.career_status_id = career_status.id
    WHERE 
      users.id = $1
      `,
    values: [id],
  };
  return connection.query(sql);
};
export default getUserInfoQuery;
