import { CohortOffset } from '../../../utils/types';
import connection from '../../config/connection';

const getPostsCommunityQuery = ({ offset }: CohortOffset) => {
  const sql = {
    text: 'select * from posts where is_public = true OFFSET $1 LIMIT 10;',
    values: [offset],
  };
  return connection.query(sql);
};

export default getPostsCommunityQuery;
