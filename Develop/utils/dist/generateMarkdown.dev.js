"use strict";

//title, display license badge, descp, purpose, install, lisc, cont, test, questions, contact, footer
// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(answers) {
  return "\n  <h1>".concat(answers.title, "</h1> \n\n  ![badge](https://img.shields.io/badge/license-").concat(answers.license, "-darkblue)<br />\n\n  ### Description\n  ").concat(answers.description, "\n\n  ### Table of Contents\n  - [Description](#description)\n  - [Purpose](#purpose)\n  - [Installation](#installation)\n  - [License](#license)\n  - [Contributing](#contributing)\n  - [Tests](#tests)\n  - [Questions](#questions)\n\n  ### Purpose\n  ").concat(answers.purpose, "\n\n  ### Installation\n  ").concat(answers.installation, "\n\n  ### License\n  ![badge](https://img.shields.io/badge/license-").concat(answers.license, "-darkblue)\n  <br />\n  This application is covered by the ").concat(answers.license, " license. \n\n  ### Contributing\n  ").concat(answers.contributing, "\n\n  ### Tests\n  ").concat(answers.tests, "\n\n  ### Questions \n  ").concat(answers.questions, "<br />\n  <br />  \n\n  Find me on GitHub: [").concat(answers.username, "](https://github.com/").concat(answers.username, ")<br />\n  <br />\n\n  Feel free to email me with any questions: ").concat(answers.email, "<br />\n  <br />\n\n  This High Quality-README was generated with \u2764\uFE0F by Jennifer Gomez\n\n  ");
} // If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }


module.exports = generateMarkdown;