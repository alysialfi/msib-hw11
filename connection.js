const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_tb',
  password: 'Postgresqlku123',
  port: 5432
})

module.exports = pool
