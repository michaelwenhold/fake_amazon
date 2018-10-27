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
});

//Show list of products
function start() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;

    console.log("");
    console.log("------------------------------Items for Sale------------------------------");
    console.log("");

    for (i = 0; i < results.length; i++) {
      console.log(" Item # " + results[i].item_id + " is a " + results[i].product_name + " --- " + "The price is $" + results[i].price)
    }


    //Prompt the user what action
    inquirer
      .prompt([
        {
          type: "input",
          name: "item id",
          message: "What is the item number of the product you like to purchase?",
        },

        {
          type: "input",
          name: "quantity",
          message: "How many would you like to purchase?"
        },
      ])
  })
};
start();