var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@123456",
  database: "customer"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (id, name) VALUES (100, 'Reshmy'),(101,'Praveen')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Inserted");
  });
  
 var sql = "UPDATE customers SET name = 'Anjana' WHERE id = '100'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("DELETE FROM customers where id=101", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});