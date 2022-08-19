// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

    let titleString = "# Title: " + `${answer.title}\n`;
    let discription = "## Discription:\n" + `* ${answer.discription}\n`;
    let motivation = "* " + `${answer.motivation}\n`;
    let why = "* " + `${answer.motivation}\n`;
    let problem = "* " + `${answer.motivation}\n`;
    let learn = "* " + `${answer.motivation}\n`;


    console.log(answer);

    let content = "";
    content = content + titleString + discription + motivation + why + problem + learn;
    console.log(content);

    return content;

};

module.exports = generateMarkdown;