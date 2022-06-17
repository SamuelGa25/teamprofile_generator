
class employee{
    //setting the constructor for the employee info.
    //so the manager can have basic info.
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    name(){
        return this.name;
    }
    id(){
        return this.id;
    }
    email(){
        return this.email;
    }
    //for the role of employee assigned whenver adding new employee.
    role(){
        return "Employee";
    }
    
}

module.exports = employee;