

//taking the data from the employee.js
const Employee = require('../lib/employee');

class manager extends Employee {
    
    constructor(name, id, email, office) {
        //already set class from employee
        // call parent constructor here:
        super(name, id, email);

        //constructor for office
        this.office = office;

    }
    //constructor for office number 
    office(){
        return this.office;
    }

    //role part for manager.
    role(){
        return "Manager";
    }
}

module.exports = manager;