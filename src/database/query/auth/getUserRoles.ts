import Connection from '../../config/connection';

interface QueryArgs {
  id: number;
}

const getUserRoles = ({ id }: QueryArgs) => {
  const sql = {
    text: 'select * from user_roles where user_id = $1',
    values: [id],
  };

  return Connection.query(sql);
};

export default getUserRoles;
