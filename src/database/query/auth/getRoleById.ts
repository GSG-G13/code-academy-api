import { JwtPayload } from '../../../utils';
import Connection from '../../config/connection';

const createUserQuery = ({ id }: JwtPayload) => {
  const sql = {
    text: 'select user_roles where user_id = $1',
    values: [id],
  };

  return Connection.query(sql);
};

export default createUserQuery;
