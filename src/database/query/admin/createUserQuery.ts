import  Connection  from '../../config/connection';

interface User {
  id: number;
  full_name: string;
  username: string;
  email: string;
  password: string;
}

const createUserQuery = ({
  id,
  full_name,
  username,
  email,
  password,
}: User) => {
  const sql = {
    text:
      'INSERT INTO USER (id, full_name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id, full_name, username, email, password;',
    values: [id, full_name, username, email, password],
  };

  return Connection.query(sql);
};

export default createUserQuery;