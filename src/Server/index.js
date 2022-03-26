const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'main_project'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.post('/loginIn/success',(req, res) => {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password

    const dummyQuery = "INSERT INTO sign_up(fname, lname, email, phone, password) VALUES (?,?,?,?,?);"
    db.query(dummyQuery,[fname,lname,email,phone,password],(err,result) => {
        // res.send('Welcome to World')
        console.log(err)
    })
})

app.get('/logiIn/fetch', (req, res) => {
    const getData = "SELECT * FROM sign_up"

    db.query(getData, (err, result) => {
        res.send(result)
    }

    )
})

app.listen(8000, () => {
    console.log('connected to port 8000')
})