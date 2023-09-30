const mySql =  require('mysql');
require("dotenv").config();

const con = mySql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

module.exports = con

// if (con.connect) {
//         console.log("sucessfully conact");
// }else{
//     console.log("conection fail");
// }