import connection from "../../config/connection"

interface Args {
  email: string
}

const getUserByEmailQuery = ({ email }: Args) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email]
  }
  return connection.query(sql)
}

export default getUserByEmailQuery
