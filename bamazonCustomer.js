var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});


function start() {
    console.log("Welcome to Bamazon!\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      sales();
    });
  }


//prompt for sales question and answer
function sales() {
   
    inquirer
      .prompt([
        {
          name: "item_id",
          type: "input",
          message: "What is the item number of the product you would like to purchase?"
        },
        {
          name: "stock_quantity",
          type: "input",
          message: "How many units would you like to purchase?"
        },
        
      ])
   
   }




   var queryStr = 'SELECT * FROM products WHERE ?';

  else {
    console.log("Error, there is insufficent stock of your item to make your puchase.");


