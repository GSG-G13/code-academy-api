import  Connection  from '../../config/connection';
import { userType } from '../../../utils/types/helpers'



const createUserQuery = ({
  full_name,
  username,
  email,
  password,
}: userType ) => {
  const sql = {
    text:
      'INSERT INTO USER ( full_name, username, email,password) VALUES ($1, $2, $3, $4) RETURNING  id;',
    values: [ full_name, username, email, password],
  };

  return Connection.query(sql);
};

export default createUserQuery;