//title, display license badge, descp, purpose, install, lisc, cont, test, questions, contact, footer
// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(answers) {
  return `
  <h1>${answers.title}</h1> 

  ![badge](https://img.shields.io/badge/license-${answers.license}-darkblue)<br />

  ### Description
  ${answers.description}

  ### Table of Contents
  - [Description](#description)
  - [Purpose](#purpose)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Purpose
  ${answers.purpose}

  ### Installation
  ${answers.installation}

  ### License
  ![badge](https://img.shields.io/badge/license-${answers.license}-darkblue)
  <br />
  This application is covered by the ${answers.license} license. 

  ### Contributing
  ${answers.contributing}

  ### Tests
  ${answers.tests}

  ### Questions 
  ${answers.questions}<br />
  <br />  

  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />

  Feel free to email me with any questions: ${answers.email}<br />
  <br />

  This High Quality-README was generated with ❤️ by Jennifer Gomez

  `;
}

// If there is no license, return an empty string
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
