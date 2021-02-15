// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
// const questions = []; convert to ES6+
function questions() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a breif description of your project."
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of your project?"
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe what intallation process did you use for your project."
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose the appropriate license for your project.",
            choices: ["Academic", "GNU", "ISC", "Open"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors to this project?"
        },
        {
            type: 'list', 
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'github', 'slack']
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "tests",
            message: "Were there any tests included in this project?"
        }
    ]);
};


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app  ;  added a promise 
async function init() {
    // usin try to mark the blockof statements and specifies a response
    try {
        const answers = await questions(); // The await is used to wait for the promise.
        const generateData = generateReadme(answers);
        await writeFileAsync('./dist/README.md', generateData); //to display in folder
            console.log ("✔️  Successfully wrote to README.md'");
    } catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
