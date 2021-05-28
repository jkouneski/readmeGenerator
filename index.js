const inquirer = require("inquirer");
const fs = require("fs");


// Array of questions for user input
const inquirerPrompts = [
  {
    type: "name",
    message: "Enter the title of this project",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for this project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the steps to install this app",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter instructions for use of this app",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose the license for this project",
    name: "license",
    choices: ["Apache", "GNU", "MIT", "BSD", "Eclipse", "Mozilla", "Unlicense"],
  },
  {
    type: "input",
    message: "Enter collaborators' links to their GitHub profiles",
    name: "collaborators",
  },
  {
    type: "input",
    message: "Enter steps to run tests if applicable",
    name: "tests",
  },

  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
  },
];
const startGenerator = () =>
  inquirer.prompt(inquirerPrompts).then((response) => {
    fs.writeFile("README.md", 
    createFile(response), 
    (err) =>
    err ? console.log(err) : 
    console.log("README file generated")
    );
  });

const createFile = ({
  title,
  description,
  installation,
  usage,
  license,
  collaborators,
  tests,
  github,
  email,
}) =>
  `# ${title}

![badge](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Collaborators](#collaborators)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
This application is covered under the ${license} license.
## Collaborators
${collaborators}
## Tests
${tests}
## Questions
- [GitHub](https://github.com/${github})
- Email any questions to ${email}
`;

startGenerator();
