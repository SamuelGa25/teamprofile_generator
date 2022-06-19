
// creating a markdown for the HTML 
function generateSite(managers, engineers, employees, interns){

    addManager = managers;
    addEngineer = engineers;
    addEmployee = employees;
    addIntern = interns;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="../style/style.css">
        
        <title> My Team Profile</title>

    </head>
    <body>  
        <header class = "header_box">
            <h1>Team Members<h1>
        </header>

        <section>
            <h2>Management</h2>
        </section>
        <div class="row">${generateManager(addManager)}
        </div>

        <section>
            <h2>Engineers</h2>
        </section>
        <div class="row">${generateEngineer(addEngineer)}
        </div>

        <section>
            <h2>Employees</h2>
        </section>
        <div class="row">${generateEmployee(addEmployee)}
        </div>

        <section>
            <h2>Interns</h2>
        </section>
        <div class="row">${generateIntern(addIntern)}
        </div>
    


    </body>
    </html>
    `;

    //functions for each team members that returns HTML data
    //manager box
    function generateManager(addManager){
        //console.log(addManager);

        //HTML layout
        const managerHTLM = addManager.map(managerData =>{
            return `

        <div class = "manager_box">
            <div class = "box_header">
            ${managerData.name}<br/>Manager</div>
            <ul>
                <li>ID: ${managerData.id}</li>
                <li>Email: <span id: "email"><a href ="mailto:${managerData.email}">${managerData.email}</a></span></li>
                <li>Office Number: ${managerData.office}</li>
            </ul>
        </div>`;
        });
        return`${managerHTLM.join(``)}`

    };

    //Engineer box
    function generateEngineer(addEngineer){
        //console.log(addEngineer);
        //HTML layout
        const engineerHTLM = addEngineer.map(engineerData =>{
            return `

        <div class = "engineer_box">
            <div class = "box_header">
            ${engineerData.name}<br/>Engineer</div>
            <ul>
                <li>ID: ${engineerData.id}</li>
                <li>Email: <span id: "email"><a href ="mailto:${engineerData.email}">${engineerData.email}</a></span></li>
                <li><a href="https://github.com/${engineerData.gitUser}">GitHub</a></li>
            </ul>
        </div>`;
        });
        return`${engineerHTLM.join(``)}`
        
    };

    //Employee box
    function generateEmployee(addEmployee){
        //console.log(addEmployee);

        //HTML layout
        const employeeHTLM = addEmployee.map(employeeData =>{
            return `

        <div class = "employee_box">
            <div class = "box_header">
            ${employeeData.name}<br/>Employee</div>
            <ul>
                <li>id: ${employeeData.id}</li>
                <li>Email: <span id: "email"><a href ="mailto:${employeeData.email}">${employeeData.email}</a></span></li>
            </ul>
        </div>`;
        });
        return`${employeeHTLM.join(``)}`
       
    }
    //Intern box
    function generateIntern(addIntern){
        //console.log(addIntern);

        //HTML layout
        const internHTLM = addIntern.map(internData =>{
            return `

        <div class = "intern_box">
            <div class = "box_header">
            ${internData.name}<br/>Intern</div>
            <ul>
                <li>ID: ${internData.id}</li>
                <li>Email: <span id: "email"><a href ="mailto:${internData.email}">${internData.email}</a></span></li>
                <li>School: ${internData.school}</li>
            </ul>
        </div>`;
        });
        return`${internHTLM.join(``)}`
        
    }

}

module.exports = generateSite;