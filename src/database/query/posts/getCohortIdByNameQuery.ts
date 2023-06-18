import { CohortNameQueryArgs } from '../../../utils';
import connection from '../../config/connection';

const getCohortIdByNameQuery = ({ cohortName }: CohortNameQueryArgs) => {
  const sql = {
    text: 'select cohorts.id from cohorts where cohorts.name = $1',
    values: [cohortName],
  };
  return connection.query(sql);
};

export default getCohortIdByNameQuery;
