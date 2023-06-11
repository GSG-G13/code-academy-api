import connection from '../../config/connection'
const checkEmailQuery = (email) => {
    const sql = {
        text: 'SELECT email from users where email = $1;',
        values: [email]
    }
    return connection.query(sql)
}
module.exports = checkEmailQuery