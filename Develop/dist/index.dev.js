"use strict";

// TODO: Include packages needed for this application
var fs = require("fs");

var inquirer = require("inquirer");

var util = require("util");

var generateReadme = require("./utils/generateMarkdown");

var writeFileAsync = util.promisify(fs.writeFile); // TODO: Create an array of questions for user input
// const questions = []; convert to ES6+

function questions() {
  return inquirer.prompt([{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  }, {
    type: "input",
    name: "description",
    message: "Please write a breif description of your project."
  }, {
    type: "input",
    name: "purpose",
    message: "What is the purpose of your project?"
  }, {
    type: "input",
    name: "installation",
    message: "Please describe what intallation process did you use for your project."
  }, {
    type: "checkbox",
    name: "license",
    message: "Please choose the appropriate license for your project.",
    choices: ["Academic", "GNU", "ISC", "Open"]
  }, {
    type: "input",
    name: "contributing",
    message: "Who are the contributors to this project?"
  }, {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'github', 'slack']
  }, {
    type: "input",
    name: "email",
    message: "Please enter your email: "
  }, {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
  }, {
    type: "input",
    name: "tests",
    message: "Were there any tests included in this project?"
  }]);
}

; // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app  ;  added a promise 

function init() {
  var answers, generateData;
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(questions());

        case 3:
          answers = _context.sent;
          // The await is used to wait for the promise.
          generateData = generateReadme(answers);
          _context.next = 7;
          return regeneratorRuntime.awrap(writeFileAsync('./dist/README.md', generateData));

        case 7:
          //to display in folder
          console.log("✔️  Successfully wrote to README.md'");
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
} // Function call to initialize app


init();