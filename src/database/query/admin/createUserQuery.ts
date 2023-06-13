import { User } from '../../../utils';
import Connection from '../../config/connection';

const createUserQuery = ({ fullName, username, email, password }: User) => {
  const sql = {
    text: 'INSERT INTO users ( full_name, username, email,password) VALUES ($1, $2, $3, $4) RETURNING  id',
    values: [fullName, username, email, password],
  };

  return Connection.query(sql);
};

export default createUserQuery;
