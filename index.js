// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'user',
    }])
    .then((answer) => {
        console.log(answer);
        fs.writeFile('README.md', `The title is #${answer.user}`, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
    // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();