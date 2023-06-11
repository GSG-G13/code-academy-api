import connection from '../../config/connection';
import {roleType}  from '../../../utils/types/helpers';


const addRolesQuery = ({ user_id, role_id, cohort_id }: roleType)=> {
  const sql = {
    text: 'INSERT INTO user_roles ( user_id, role_id, cohort_id) VALUES ($1, $2, $3) RETURNING user_id, role_id,cohort_id;',
    values: [ user_id, role_id, cohort_id],
  };
  return connection.query(sql);
};

export default addRolesQuery;