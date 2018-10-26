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
connection.connect(function (err) {
  if (err) throw err;

  // Start function after the connection is made
  start();
});


//Show list of products
function start() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.log("Items for Sale");
    
    for (i=0; i<results.length; i++){
      console.log(" Item # " + results[i].item_id + " is a " + results[i].product_name + " --- " + "The price is $" + results[i].price)
    }
  })


//Prompt the user what action
inquirer
  .prompt([
    {
      name: "item_id",
      type: "input",
      message: "What product would you like to purchase. Enter the id number"

    }
  ])
}
