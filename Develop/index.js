// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      message: "Please enter a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter installtion instructions.",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter usage information.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please enter contribution guidelines.",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please enter testing instructions.",
      name: "testing",
    },
    {
      type: "input",
      message: "Please enter your github username.",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email address",
      name: "email",
    },
  ])
  .then((data) => {
    console.log(data);

    const filename = `../README.md`;

    let output = `# Project Title\n ${data.title}\n\n # Description\n ${data.description}\n\n # Installation Instructions\n ${data.installation}
        \n\n # Usage Information\n ${data.usage}\n\n # Contribution Guidelines \n\n ${data.contribution} \n\n # Testing Instructions \n ${data.testing}
        \n\n # Github Username\n ${data.username}\n\n # Email\n ${data.email}\n\n
    `;

    fs.writeFile(filename, output, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
