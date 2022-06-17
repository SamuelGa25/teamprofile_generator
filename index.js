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
            name: "id",
            message: "What is your employee ID? (required)"

        },{
            //array for email
            type: "input",
            name: "email",
            message:"What is your email? (required)"
            
        },{
            //array for office number 
            type: "input",
            name: "office",
            message: "What is your office's number?"
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
            message: 'What would you like to add?',
            choices: ['add a manager', 'add an engineer', 'add an employee', 'add an intern']
            
        }
    ])
}

const newEngineer = () =>{
    console.log(`
    ---------------------
        New Engineer!!
    ---------------------
    `);
    //array for engineers
    return inquirer.prompt([

        {
            //for name and lastname
            type: 'input',
            name: "name",
            message:'What is your name and lastname? (required)'
        },{
            //array for Identification number
            type: "input",
            name: "id",
            message: "What is your employee ID? (required)"
    
        },{
            //array for email
            type: "input",
            name: "email",
            message:"What is your email? (required)"
            
        },{
            //array for email
            type: "input",
            name: "gitUser",
            message:"What is your github Username? (required)"
        }

    ]).then(answers =>{
        //showing the answers of engineer
        console.log(answers);

    })

}

const newEmployee = () =>{
    console.log(`
    ---------------------
        New Employee!!
    ---------------------
    `);

}

const newIntern = () =>{
    console.log(`
    -----------------
        New Intern!!
    -----------------
    `);


}

const finishedTeam = () =>{
    console.log(`
    ---------------
    TEAM FINISHED!!
    ---------------
    `);


}
newManager();
