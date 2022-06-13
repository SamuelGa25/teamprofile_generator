//install 
const inquirer = require("inquirer");
const fs = require('fs');

//implementing classes
const engineer = require('../lib/engineer');
const manager = require('../lib/manager');
const employee = require('..lib/employee');
const intern = require('../lib/intern');

//employee data 
const newManager = () =>{
    return inquirer.prompt([
        {
            //for name and lastname
            type: 'input',
            name: "name",
            message:'What is your name and lastname? (required)'
        },{
            //array for Identification number
            type: "input",
            name: "employeeID",
            message: "What is your ID number? (required)"

        },{
            //array for office number 
            type: "input",
            name: "office",
            message: "What is your office's number?"
            

        },{
            //array for email
            type: "input",
            name: "email",
            message:"What is your email?"

        },{

            //array for type of employee 
            type: "list",
            name: "employeeRank",
            message: "What rank of employee are you choosing? (required)",
            choices: ["Manager", "Engineer", "Employee", "Intern"]

        }


    ]).then(answers => {
        //showing the answers
        console.log(answers);

    }) 
}

const managerMenu = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Do you want to continue with?',
            choices: ['add a manager', 'add an engineer', 'add an employee', 'add an intern']
            
        }
    ])
}

const newEngineer = () =>{
    console.log(`
    ---------------------
    Adding new engineer!!
    ---------------------
    `);

}

const newEmployee = () =>{
    console.log(`
    ---------------------
    Adding new employee!!
    ---------------------
    `);

}

const newIntern = () =>{
    console.log(`
    -----------------
    Adding new intern!!
    -----------------
    `);


}

const finishedTeam = () =>{
    console.log(`
    -----------------
    TEAM IS FINISHED!!
    -----------------
    `);


}
newManager();
