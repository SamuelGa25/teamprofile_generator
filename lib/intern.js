

//data from employee.js
const employee = require('../lib/employee');


class intern extends employee{

    constructor(name, id, email, school){
        //calling from employee data 
        super(name, id, email);

        //data from school
        this.school = school;
    }

    school(){
        return this.school;
    }

    role(){
        return "Intern";
    }
}
module.exports = intern;