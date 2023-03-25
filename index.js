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

app.get('/search', (req, res) => {
  let name = req.query.name
  let query = "SELECT name,size,price from clothes WHERE name = '" + name + "'"
  console.log(query)
  connection.query(query, (err, rows, fields) => {
    if (err) throw err 
    res.send(rows)
  })
})

app.post('/register', (req, res) => {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let email = req.body.email
  let username = req.body.username
  let password = req.body.password
  
  let query = `INSERT INTO user (firstname, lastname, email, username, password) VALUES ('${firstname}', '${lastname}', '${email}', '${username}', '${password}')`
  console.log(query)
  connection.query(query, (err, rows, fields) => {
    if (err) throw err 
    res.send(rows)
  })
})

app.get('/account', (req,res) => {
    let username = req.query.username
    let firstname = req.query.firstname
    let lastname = req.query.lastname
    let email = req.query.email

    let query = `UPDATE user SET firstname = '${firstname}', lastname = '${lastname}', email = '${email}' WHERE username = '${username}'`
    console.log(query)
    connection.query(query, (err, rows, fields) => {
        if(err) throw err
        res.send(err)
    })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
