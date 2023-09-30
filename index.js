const express = require('express');
const connection = require('./conn');
const path = require('path')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())

require("dotenv").config();
// for course starting here

app.get('/', (req, resp) => {
    resp.send("turning brain is loding")
})


app.get('/course', (req, resp) => {
    const data = connection.query("SELECT * FROM course_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})

app.get('/course/:id', (req, resp) => {
    const data = connection.query(`SELECT * FROM course_tbl where id = ${req.params.id}`, (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})


app.post('/course', (req, resp) => {
    const data = req.body
    console.log(data)
    connection.query('INSERT INTO course_tbl SET ?', data, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
})


app.put('/course', (req, resp) => {
    const data = [req.body.course_name, req.body.id]
    console.log(data)
    connection.query('UPDATE course_tbl SET course_name = ? where id = ?', data, (err, result, fildes) => {
        if (err) err
        resp.send(result)
    })
})


app.delete('/course/:id', (req, resp) => {
    const data = req.params.id
    connection.query(`DELETE FROM course_tbl WHERE id= ${data}`, (error, result, fildes) => {
        if (error) error
        resp.send(result);
    })
});


// for subject starting here

app.get('/subject', (req, resp) => {
    const data = connection.query("SELECT * FROM subject_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})

app.get('/subject/:id', (req, resp) => {
    const data = connection.query(`SELECT * FROM subject_tbl where id = ${req.params.id}`, (err, result) => {
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
    const data = [req.body.course_id_fk, req.body.course_name, req.body.subject_name, req.body.id]
    console.log(data)
    connection.query('UPDATE subject_tbl SET course_id_fk = ?, course_name = ?, subject_name = ? where id = ?', data, (err, result, fildes) => {
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


// for Unit starting here


app.get('/unit', (req, resp) => {
    const data = connection.query("SELECT * FROM unit_tbl", (err, result) => {
        if (err) throw err
        resp.send(result)
    })
})

app.get('/unit/id', (req, resp) => {
    const data = connection.query(`SELECT * FROM unit_tbl where id ${req.params.id}`, (err, result) => {
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
    const data = [req.body.course_id_fk, req.body.course_name, req.body.subject_id_fk, req.body.subject_name, req.body.unit_name, req.body.id]
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



// for video starting here 

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
    const data = [req.body.course_id_fk, req.body.course_name, req.body.subject_id_fk, req.body.subject_name, req.body.unit_id_fk, req.body.unit_name, req.body.title, req.body.description, req.body.duration, req.body.url, req.body.important_point, req.body.id]
    console.log(data)
    connection.query('UPDATE video_tbl SET course_id_fk = ?, course_name = ?, subject_id_fk = ?, subject_name = ?, unit_id_fk = ?, unit_name = ?, title = ?, description = ? , duration = ? ,url = ?, important_point = ?  where id = ?', data, (err, result, fildes) => {
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



// for packages starting here 

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


// for student  starting here 

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
    connection.query('INSERT INTO student_tbl SET ?', data, (error, result, fildes) => {
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


app.listen(process.env.PORT)