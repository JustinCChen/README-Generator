// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getGithubLicenseBadge (license){
  if (license === "None"){
    return "N/A";
  }else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
function getGithubLicenselink(license){
  if (license === "None"){
    return "N/A";
  }else if (license === "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT))";
  }else if (license === "GPL") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === ""){
    return "N/A"
  }else{
    return `This project is licensed under the ${license} license.`;
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${getGithubLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${getGithubLicenselink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;


