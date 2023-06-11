import connection from '../../config/connection'
const addRolesQuery = ({id,user_id,role_id,cohort_id }) => {
    const sql = {
        text:'INSERT INTO user_roles(  id,user_id,role_id,cohort_id) VALUES ($1, $2, $3, $4) RETURNING id,user_id,role_id,cohort_id;',
        values: [id,user_id,role_id,cohort_id]
    }
    return connection.query(sql)
}
module.exports = addRolesQuery;