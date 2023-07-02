import connection from '../../config/connection';
import { MemberIdQueryArgs } from '../../../utils';

const getSingleMemberQuery = ({ memberId }: MemberIdQueryArgs) => {
  const sql = {
    text: 'select * from users where id = $1',
    values: [memberId],
  };
  return connection.query(sql);
};

export default getSingleMemberQuery;
