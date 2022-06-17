
//data from the intern.js 

const Intern = require('../lib/intern');


test('testing the constructor values from employee.js', () =>{

    const intern = new Intern('sam', 2626, 'sam@gmail.com', 'University of Miami');

    //name
    expect(intern.name).toBe('sam');
    //employee id
    expect(intern.id).toEqual(2626);
    //email
    expect(intern.email).toBe('sam@gmail.com');
    //school
    expect(intern.school).toBe('University of Miami');
    //role of intern.
    expect(intern.role()).toBe("Intern")


})