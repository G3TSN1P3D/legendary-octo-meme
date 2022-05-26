// TODO: Include packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const createReadMeFormat = require('createReadMeFormat');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `what's your project's title?: `
    },
    {
        type: 'input',
        name: 'motivation',
        message: `What was your motivation?: `
    },
    {
        type: 'input',
        name: 'why',
        message: `Why did you build this project?: `
    },
    {
        type: 'input',
        name: 'problem',
        message: `What problem does ir solve?: `
    },
    {
        type: 'input',
        name: 'learnt',
        message: `What did you learn?: `
    },
    {
        type: 'input',
        name: 'installation',
        message: `Provide instructions for installation: `
    },
    {
        type: 'input',
        name: 'use',
        message: `How do you use it?: `
    },
    {
        type: 'input',
        name: 'collaborators',
        message: `Who are your collaborators?: `
    },
    {
        type: 'input',
        name: 'license',
        message: `What type of license are you giving your project?: `
    },
    {
        type: 'input',
        name: 'features',
        message: `If you project has lots of features, please list them here: `
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([questions]).then((data) => {
        console.log("README.md created successfully!")
        writeToFile("README.md", createReadMeFormat({ ...data }));
    })
    
}

// Function call to initialize app
init();
