// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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



])

.then((answer) => {

        let titleString = "# Title: " + `${answer.title}\n`;
        let discription = "## Discription:\n" + `* ${answer.discription}\n`;
        console.log(answer);

        let content = "";
        content = content + titleString + discription;
        console.log(content);

        fs.writeFile('README.md', content, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
    // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();