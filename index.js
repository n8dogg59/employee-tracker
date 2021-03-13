const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // Your MySQL password
    password: 'Destin12!',
    database: 'employeeDB'
  });

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '/n');
    startApp();
})

  // opening function for app
function startApp() {
    inquirer
        .prompt({
            type: "list",
            name: "answer",
            message: "Select An Option",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role"
            ]
        })
        .then(response => {
            switch (response.action) {
                case "View All Departments":
                    viewDept();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmp();
                    break;
                case "Add a Department":
                    addDept();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmp();
                    break;
                case "Update an Employee Role":
                    updateEmpRole();
                    break;
            }
        })
}

function viewDept() {
    connection.query (
       'SELECT * FROM department', function(err, res) {
           if (err) throw err;
           console.table(res);
           connection.end();
       }
       // where selecting from and what selecting
    )
    // .then (([rows]
    // ) => {
    //     console.log(rows);
    // }
        
    // )
}