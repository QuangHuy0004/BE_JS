const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ccq2211k_cdjs"
    
}); 

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected success to MySql! ");
  });

module.exports = conn;