

const { default: TestRunner } = require('jest-runner');
const { getMaxListeners } = require('process');
const Employee = require('../lib/employee');


test('testing for the constructor to getr the values of employees', () => {
    const employee = new Employee('John', 244262, 'john@gmail.com');

    //testing expectation
    //name
    expect(employee.name).toBe('John');
    //employee id 
    expect(employee.id).toEqual(244262);
    //e-mail
    expect(employee.email).toBe('john@gmail.com');


});




