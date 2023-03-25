const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'revendb'
})

app.use(cors())
app.use(express.json())

connection.connect()

if(connection){ console.log("Connect success") }
else { console.log("Failed") }


app.get('/women', (req, res) => {
  connection.query('SELECT name,size,price from clothes where category_ID = 1', (err, rows, fields) => {
    if (err) throw err 
    res.send(rows)
  })
})

app.get('/men', (req, res) => {
  connection.query('SELECT name,size,price from clothes where category_ID = 2', (err, rows, fields) => {
    if (err) throw err 
    res.send(rows)
  })
})



app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
