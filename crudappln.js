var mysql = require('mysql');
var express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@123456",
  database: "employee"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  app.listen(8082, () => {
    console.log('listening');
  })
  app.get('/employee', (req, res) => {
    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (!err)
            res.send(result);
        else
            console.log(err);
      });
  });

  app.post('/employee', (req, res) => {
    let emp = req.body;
    console.log(emp);
    con.query("INSERT INTO employees (id, email_id,first_name,last_name) VALUES (?,?,?,?)",[emp.id,emp.email_id,emp.first_name,emp.last_name] ,
    function (err, result, fields) {
        if (!err)
            res.send(result);
        else
            console.log(err);
      });
  });
  app.patch('/employee/:id', (req, res) => {
    let emp = req.body;
    console.log(emp);
    con.query("UPDATE employees SET email_id=?,first_name=?,last_name=? where id=?",[emp.email_id,emp.first_name,emp.last_name,req.params.id] ,
    function (err, result, fields) {
        if (!err)
            res.send(result);
        else
            console.log(err);
      });
  });
  app.delete('/employee/:id', (req, res) => {
    let emp = req.body;
    console.log(emp);
    con.query("DELETE from employees where id=? ",[req.params.id] ,
    function (err, result, fields) {
        if (!err)
            res.send(result);
        else
            console.log(err);
      });
  });