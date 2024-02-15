require('dotenv').config()
const dbUrl = process.env.NODE_ENV === 'test'
  ? process.env.TEST_DB_URI
  : process.env.DB_URI

let PORT = process.env.PORT

module.exports = {
  dbUrl,
  PORT
}