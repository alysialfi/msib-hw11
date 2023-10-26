const pool = require('./connection.js')
const express = require('express')

const app = express()

app.use(express.json())
app.get('/todo', async (req, res) => {
  pool.query('SELECT * FROM todo', (err, result) => {
    if (err) {
    //   handleQueryError(err, res)
      console.log(err)
    } else {
      res.status(200)
      res.json(result.rows) // Send the data as JSON
    }
  })
})

module.exports = app
