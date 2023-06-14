import { AddCohort } from '../../../utils';
import connection from '../../config/connection';

const AddCohortQuery = ({ name, thumbnail, startDate, endDate }: AddCohort) => {
  const sql = {
    text: 'INSERT INTO cohorts (name, thumbnail, start_date, end_date) VALUES ($1, $2, $3, $4)',
    values: [name, thumbnail, startDate, endDate],
  };
  return connection.query(sql);
};

export default AddCohortQuery;
