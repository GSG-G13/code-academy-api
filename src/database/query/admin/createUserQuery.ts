import  Connection  from '../../config/connection';

interface User {
  full_name: string;
  username: string;
  email: string;
  password: string;
}

const createUserQuery = ({
  full_name,
  username,
  email,
  password,
}: User) => {
  const sql = {
    text:
      'INSERT INTO USER ( full_name, username, email,password) VALUES ($1, $2, $3, $4) RETURNING  id;',
    values: [ full_name, username, email, password],
  };

  return Connection.query(sql);
};

export default createUserQuery;