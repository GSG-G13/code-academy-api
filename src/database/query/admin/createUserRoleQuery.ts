import connection from '../../config/connection';
import { roleType } from '../../../utils/types/helpers';

const createUserRoleQuery = ({ userId, roleId, cohortId }: roleType) => {
  const sql = {
    text: 'INSERT INTO user_roles ( user_id, role_id, cohort_id) VALUES ($1, $2, $3) RETURNING user_id, role_id,cohort_id;',
    values: [userId, roleId, cohortId],
  };
  return connection.query(sql);
};

export default createUserRoleQuery;
