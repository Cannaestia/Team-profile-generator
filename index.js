const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/page-template.js');
const { Console } = require('console');


const employees = [];

const addManager = () => {
  inquirer
    .prompt([
      {
       type: 'input',
       name: 'name',
       message: 'Please enter manager name', 
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter manager id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter manager email',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter manager office number',
      },
    ])
    .then((answers) =>{
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employees.push(manager);
      menuOptions();
    })
  }
  addManager ()

const menuOptions = () => {
  inquirer
   .prompt({
    type: 'rawlist',
    name: 'menu',
    choices: [
      'Engineer',
      'Intern',
      'Exit',
    ],
    message: 'Please select from the list of available options.'
  }).then((answers) => {
    switch(answers.menu) {
      case 'Engineer': 
        addEngineer ();
        break;
      
      case 'Intern': 
        addIntern ();
        break;
      
      default: 
      createTeam();
      // process.exit();
        
      

    }

  })
}


const addEngineer = () => {
  inquirer
    .prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter Engineer name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter Engineer id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter Engineer email',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter Engineer GitHub',
      },
    ])
    .then((answers) => {
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
      employees.push(engineer);
      menuOptions();
    });
};


const addIntern = () => {
  inquirer
    .prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter Intern name',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter Intern id',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter Intern email',
      },
      {
        type:'input',
        name: 'school',
        message: 'Please enter Intern school',
      },
    ])
    .then((answers) => {
      const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
      employees.push(intern);
      menuOptions();
    })
}

const createTeam = () => {
const test = template(employees);
console.log(test);
    fs.writeFile('./dist/team.html', template(employees), function (err) {
      if (err) throw err;
    })
    console.log ('TEAM CREATED!');
    
  
}










