
//taking the data from the employee.js
const Employee = require('../lib/employee');

class engineer extends Employee{

    constructor(name, id, email, gitUser  ) {
        //class from employee
        //call parent constructor here:
        super(name, id, email);

        //constructor for github userName
        this.gitUser = gitUser;

    }
    gitUser(){
        return this.gitUser;
    }
    //engineer role 
    role(){
        return "Engineer";
    }

}
module.exports = engineer;