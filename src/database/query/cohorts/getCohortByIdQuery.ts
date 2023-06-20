import { CohortIdQueryArgs } from '../../../utils';
import connection from '../../config/connection';

const getCohortByIdQuery = ({ cohortId }: CohortIdQueryArgs) => {
  const sql = {
    text: 'SELECT * FROM cohorts WHERE id = $1;',
    values: [cohortId],
  };

  return connection.query(sql);
};

export default getCohortByIdQuery;
