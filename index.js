
//implementing classes
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');

const generateSite = require('./src/generateSite');
//install 
const inquirer = require('inquirer');
const fs = require('fs');

var managers = [];
var engineers = [];
var employees = [];
var interns = [];


//employee data 
let questions = memberData =>{

    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to add?',
            choices: ['add a manager', 'add an engineer', 'add an employee', 'add an intern']
        },{
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
            message: "What is your office's number?",
            when: function(data){
                if (data.menu === "add a manager"){
                    return true;
                }else { 
                    return false;
                }
            }
        },{
            //array for email
            type: "input",
            name: "gitUser",
            message:"What is your github Username? (required)",
            when: function(data){
                if (data.menu === "add an engineer"){
                    return true;
                }else{
                    return false;
                }
            }
        },{
            //array for school
            type: "input",
            name: "school",
            message:"Enter your School name (required)",
            when: function(data){
                if (data.menu === "add an intern"){
                    return true;
                }else{
                    return false;
                }
            }

        },{
            //yes or no
            type: "confirm",
            name: "newMember",
            message:"Would you like to add a new member? (required)",
            default: false

        },

    ]).then(answers => {
        console.log(answers);
        //manager
        if (answers.menu === "add a manager"){
            console.log(`
            ---------------------
                New Manager Added!!
            ---------------------`)
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            managers.push(manager); 
        }//engineer
        if (answers.menu === "add an engineer"){
            console.log(`
            ---------------------
                New Engineer Added!!
            ---------------------`)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitUser);
            engineers.push(engineer);
        }//employee
        if(answers.menu === "add an employee"){
            console.log(`
            ---------------------
                New Employee Added!!
            ---------------------`)
            const employee = new Employee(answers.name, answers.id, answers.email);
            employees.push(employee);
        }//intern
        if(answers.menu === "add an intern"){
            console.log(`
            ---------------------
                New Intern Added!!
            ---------------------`)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            interns.push(intern);
        }
        //adding another person
        if(answers.newMember){
            return questions(memberData);
        }else{
            return memberData;
        }

    });
}

console.log(`
            ---------------------
                   WELCOME!! =D
            ---------------------`)


    

//funtion that writes the HTML 
const writeFile = fileContent => {
    return new Promise((resolve, reject)=>{

        fs.writeFile('./dist/index.html', fileContent, err =>{
            //it will reject in case of an error.
            if (err){
                reject(err)
                console.log(err);
                //returning so the error does not occur
                return;
            }
            //if everything went well, then succesfull data.
            resolve({
                ok: true, 
                message: 'File Created!'                       
            });
            
        });

    });

};  

function init(){
    questions()
    .then(data => {
        return generateSite(managers, engineers, employees, interns);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML);
    })
    .catch(err =>{
        console.log(err);
    });
}

//initializes the app.
init();





