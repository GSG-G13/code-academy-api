import connection from '../../config/connection';

interface Args{
  user_id: number;
  role_id: number;
  cohort_id: number;
}

const addRolesQuery = ({  user_id, role_id, cohort_id }: Args)=> {
  const sql = {
    text: 'INSERT INTO user_roles ( user_id, role_id, cohort_id) VALUES ($1, $2, $3) RETURNING  user_id, role_id, cohort_id;',
    values: [ user_id, role_id, cohort_id],
  };
  return connection.query(sql);
};

export default addRolesQuery;