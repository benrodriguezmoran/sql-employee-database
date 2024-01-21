const inquirer = require("inquirer");
const db = require("./connection/db.js")
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

function init() {
    inquirer
        .prompt(
            {
                name:"menu",
                type:"list",
                message:"Choose what to do",
                choices: options
            })
        .then((answer) => 
            {
                switch (answer.menu) {
                    case "View All Employees":
                        queryTable("employee")
                        break;
                    case "Add Employee":
                    case "Update Employee Role":
                    case "View All Roles":
                    case "Add Role":
                    case "View All Departments":
                    case "Add Department":
                    case "Quit": 
                        console.log("Quitting");
                        db.end();
                    default: 
                        
                }
            })
        
};

function addEmployee() {
    inquirer
        .prompt(
            {
                name:"firstName",
                type:"input",
                message:"[Adding an employee] First name:",
            },
            {
                name:"lastName",
                type:"input",
                message:"[Adding an employee] Last name:",
            },
            {
                name:"role",
                type:"input",
                message:"[Adding an employee] Role:",
                choices: options
            })
        .then((answers) => 
            {
            })
}

function addDepartment(params) {
    
}

function viewDepartment(department) {
    inquirer
        .prompt(
            {
                name:"choice",
                type:"list",
                message:"Choose what to do",
                choices: employeeOptions
            })
        .then((answer) => 
            {
                queryTable(answer)
            })
}

const queryTable = (table) => {
    db.query(`SELECT * FROM ${table};`, (err, res) => {
        if (err) {
        console.error(err);
        }
        console.log("\n");
        console.table(res);
    });
};

db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the company database");
    init();
  });