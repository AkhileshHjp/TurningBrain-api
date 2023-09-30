const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())


app.get('/packages', (req, resp) => {
    const data = connection.query("SELECT * FROM packages_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})



app.post('/packages', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO packages_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/packages', (req, resp) => {
    const data = [req.body.course_id_fk, req.body.course_name, req.body.package_name, req.body.duration, req.body.mrp, req.body.discount, req.body.price, req.body.id]
    console.log(data)
    connection.query('UPDATE packages_tbl SET course_id_fk = ?, course_name = ?, package_name = ?, duration = ?, mrp = ?, discount = ?, price = ?   where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})


app.delete('/packages/:id', (req, resp) => {
    const data = req.params.id
    connection.query(`DELETE FROM packages_tbl WHERE id= ${data}`, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
});


app.listen(2000)