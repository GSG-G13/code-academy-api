import  Connection  from '../../config/connection';

interface User {
  full_name: string;
  username: string;
  email: string;
  hashPassword: string;
}

const createUserQuery = ({
  
  full_name,
  username,
  email,
  hashPassword,
}: User) => {
  const sql = {
    text:
      'INSERT INTO USER ( full_name, username, email,  hashPassword) VALUES ($1, $2, $3, $4) RETURNING  id;',
    values: [ full_name, username, email, hashPassword],
  };

  return Connection.query(sql);
};

export default createUserQuery;