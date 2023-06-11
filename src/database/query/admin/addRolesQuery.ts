import connection from '../../config/connection';

interface Args{
  id: number;
  user_id: number;
  role_id: number;
  cohort_id: number;
}

const addRolesQuery = ({ id, user_id, role_id, cohort_id }: Args)=> {
  const sql = {
    text: 'INSERT INTO user_roles (id, user_id, role_id, cohort_id) VALUES ($1, $2, $3, $4) RETURNING id, user_id, role_id, cohort_id;',
    values: [id, user_id, role_id, cohort_id],
  };
  return connection.query(sql);
};

export default addRolesQuery;