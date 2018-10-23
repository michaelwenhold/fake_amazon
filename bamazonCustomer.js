var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // The port
  port: 3306,

  // Username
  user: "root",

  // Password & Database
  password: "brady1212",
  database: "bamazon_db"
});

// Connect to MySQL
connection.connect(function(err) {
  if (err) throw err;

  // Start function after the connection is made
  start();
});