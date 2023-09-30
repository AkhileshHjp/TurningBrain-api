const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())


app.get('/subject', (req, resp) => {
    const data = connection.query("SELECT * FROM subject_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})


app.post('/subject', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO subject_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/subject', (req, resp) => {
    const data = [req.body.course_id_fk,req.body.course_name,req.body.subject_name, req.body.id]
    console.log(data)
    connection.query('UPDATE course_tbl SET course_id_fk = ?, course_name = ?, subject_name = ? where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})


app.delete('/subject/:id', (req, resp) => {
    const data = req.params.id
    connection.query(`DELETE FROM subject_tbl WHERE id= ${data}`, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
});


app.listen(2000)