
//taking the data from employee
const Engineer = require('../lib/engineer');


test('testing to get the values', () =>{
    //expected values, when engineer added 
    const engineer = new Engineer('Johan', 5, 'johan@gmail.com', 'johandoe');

    //name
    expect(engineer.name).toBe('Johan');
    //employee id
    expect(engineer.id).toEqual(5);
    //email
    expect(engineer.email).toBe('johan@gmail.com');
    //git username
    expect(engineer.gitUser).toBe('johandoe');
    //role of engineer 
    expect(engineer.role()).toBe("Engineer");
    
});
