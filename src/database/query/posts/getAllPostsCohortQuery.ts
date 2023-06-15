import connection from '../../config/connection';
import { CohortId } from '../../../utils/types';

const getAllPostsCohortQuery = ({ id }: CohortId) => {
  const sql = {
    text: 'select * from posts where cohort_id = $1;',
    values: [id],
  };
  return connection.query(sql);
};

export default getAllPostsCohortQuery;
