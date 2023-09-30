const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())


app.get('/unit', (req, resp) => {
    const data = connection.query("SELECT * FROM unit_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})


app.post('/unit', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO unit_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/unit', (req, resp) => {
    const data = [req.body.course_id_fk,req.body.course_name,req.body.subject_id_fk,req.body.subject_name, req.body.unit_name , req.body.id]
    console.log(data)
    connection.query('UPDATE unit_tbl SET course_id_fk = ?, course_name = ?, subject_id_fk = ?,subject_name = ?, unit_name = ? where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})


app.delete('/unit/:id', (req, resp) => {
    const data = req.params.id
    connection.query(`DELETE FROM unit_tbl WHERE id= ${data}`, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
});


app.listen(2000)