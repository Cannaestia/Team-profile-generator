const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/page-template.js');

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
      const manager = newManager(answers.name, answers.id, answers.email, answers.officeNumber);
      employees.push(manager);
      menuOptions();
    })
    addManager ()
}

const menuOptions = () => {
  prompt({
    type: 'rawlist',
    name: 'menuOptions',
    choies: [
      'Engineer',
      'Intern',
      'Exit',
    ],
    message: 'Please select from the list of available options.'
  }).then((answers) => {
    switch(answers.menuOptions) {
      case 'Engineer': {
        addEngineer ();
        break;
      }
      case 'Intern': {
        addIntern ();
        break;
      }
      default: {
        process.exit();
        break;
      }

    }

  })
}

const addEngineer = () => {
  inquire
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
      const engineer = newEngineer (answers.name, answers.id, answers.email, answers.github);
      employees.push(engineer);
      menuOptions();
    });
};

const addIntern = () => {
  inquire
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
      const intern = newIntern (answers.name, answers.id, answers.email, answers.school);
      employees.push(intern);
      menuOptions();
    })
}










































inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

