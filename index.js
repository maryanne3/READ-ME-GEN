// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    
        {
          type: "input",
          name: "title",
          message: "What is the title of the project?",
        },
        {
          type: "input",
          name: "description",
          message: "What is the description?",
        },
        {
          type: "input",
          name: "usage",
          message: "How do I use the application?",
        },
        {
          type: "input",
          name: "test",
          message: "How do I test the application?",
        },
        {
          type: "input",
          name: "github",
          message: "What is your github username?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "contribution",
          message: "How can people contribute to this app?",
        },
        {
          type: "list",
          name: "license",
          message: "Choose a license type:",
          choices: ["MIT", "GPL 3.0", "Apache", "BSD", "GPL 2.0"],
        },
        {
          type: "input",
          name: "installation",
          message: "What is your installation process?",
        },
      ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
