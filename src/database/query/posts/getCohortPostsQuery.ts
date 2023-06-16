import connection from '../../config/connection';
import { CohortPostsQueryArgs } from '../../../utils/types';

const getAllPostsCohortQuery = ({ id, offset }: CohortPostsQueryArgs) => {
  const sql = {
    text: 'select * from posts where cohort_id = $1 OFFSET $2 LIMIT 10;',
    values: [id, offset],
  };
  return connection.query(sql);
};

export default getAllPostsCohortQuery;
