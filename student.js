const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())


app.get('/students', (req, resp) => {
    const data = connection.query("SELECT * FROM student_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})

app.get('/students/:id', (req, resp) => {
    const data = connection.query(`SELECT * FROM student_tbl where id = ${req.params.id}`, (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})


app.post('/students', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO students_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/students', (req, resp) => {
    const data = [req.body.name, req.body.mobile, req.body.email, req.body.subject, req.body.collage, req.body.status, req.body.id]
    console.log(data)
    connection.query('UPDATE student_tbl SET name = ?, mobile = ?, email = ?, subject = ?, collage = ?, status = ?   where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})




app.listen(2000)