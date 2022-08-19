// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
// Prompt for inquirer
inquirer.
prompt([{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a breif description of your project.',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'What was your motivation?.',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?.',
        name: 'why?',
    },
    {
        type: 'input',
        message: 'What problem did you solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install',
    },
])

.then((answer) => {


        fs.writeFile('README.md', generateMarkdown(answer), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
    // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();