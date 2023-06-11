import connection from '../../config/connection'
const addUserQuery = ({id,full_name, username, email, password }) => {
    const sql = {
        text:'INSERT INTO USER( id,full_name, username, email, password) VALUES ($1, $2, $3, $4,$5) RETURNING id, full_name,username, email, password;',
        values: [id,full_name, username, email, password]
    }
    return connection.query(sql)
}
module.exports = addUserQuery;