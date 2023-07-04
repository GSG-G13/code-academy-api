import connection from '../../config/connection';

const getMemberCountForCohort = (cohortId: string) => {
  const sql = {
    text: `SELECT COUNT(user_id) AS count
           FROM user_roles
           WHERE cohort_id = $1;`,
    values: [cohortId],
  };
  return connection.query(sql);
};
export default getMemberCountForCohort;
