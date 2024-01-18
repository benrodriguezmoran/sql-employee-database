const inquirer = require("inquirer");
const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection({
    host: "localhost",
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

const options = [
    "View All Employees",
    "Add Employee",
    "Update Employee Role",
    "View All Roles",
    "Add Role",
    "View All Departments",
    "Add Department",
    "Quit"
];

function menu() {
    inquirer
        .prompt(
            {
                name:"choice",
                type:"list",
                message:"Choose what to do",
                choices: options
            }
        .then((answer) => 
            {
                switch (answer.choice) {
                    case "View All Employees":
                    case "Add Employee":
                    case "Update Employee Role":
                    case "View All Roles":
                    case "Add Role":
                    case "View All Departments":
                    case "Add Department":
                    case "Quit": 
                        console.log("Quitting");
                        db.end();
                }
            })
        )
};
db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the company database");
    menu();
  });