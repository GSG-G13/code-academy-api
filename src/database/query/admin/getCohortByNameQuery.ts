import connection from '../../config/connection';

interface Args {
  name: string;
}

const getCohortByNameQuery = ({ name }: Args) => {
  const sql = {
    text: 'SELECT * FROM cohorts WHERE name = $1 RETURNING *',
    values: [name],
  };
  return connection.query(sql);
};

export default getCohortByNameQuery;
