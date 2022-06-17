
//tester for manager.js 
const Manager = require('../lib/manager');


test ('testing for the constructor to get the values', () => {
    //expected values, when manager added.
    const manager = new Manager('Sam', 1, 'samuel@gmail.com', 101);

    //name
    expect(manager.name).toBe('Sam');
    //employee id
    expect(manager.id).toEqual(1);
    //email
    expect(manager.email).toBe('samuel@gmail.com');
    //office number
    expect(manager.office).toEqual(101);
    //role of manager declared.
    expect(manager.role()).toBe("Manager")

});
