const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())


app.get('/video', (req, resp) => {
    const data = connection.query("SELECT * FROM video_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})

app.get('/video/:id', (req, resp) => {
    const data = connection.query(`SELECT * FROM video_tbl where id = ${req.params.id}`, (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})


app.post('/video', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO video_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/video', (req, resp) => {
    const data = [req.body.course_id_fk, req.body.course_name, req.body.subject_id_fk, req.body.subject_name, req.body.unit_id_fk, req.body.unit_name, req.body.title, req.body.description, req.body.duration, req.body.url, req.body.id]
    console.log(data)
    connection.query('UPDATE video_tbl SET course_id_fk = ?, course_name = ?, subject_id_fk = ?, subject_name = ?, unit_id_fk = ?, unit_name = ?, title = ?, description = ? , duration = ? ,url   where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})


app.delete('/video/:id', (req, resp) => {
    const data = req.params.id
    connection.query(`DELETE FROM video_tbl WHERE id= ${data}`, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
});


app.listen(2000)