import connection from '../../config/connection';

interface Args {
  email: string;
}

const getUserByEmailQuery = ({ email }: Args) => {
  const sql = {
    text: `
    SELECT users.id, users.full_name,users.password , users.username, users.email, roles.name AS role
    FROM users
    JOIN user_roles ON users.id = user_roles.user_id
    JOIN roles ON user_roles.role_id = roles.id
    WHERE email = $1`,
    values: [email],
  };
  return connection.query(sql);
};

export default getUserByEmailQuery;
