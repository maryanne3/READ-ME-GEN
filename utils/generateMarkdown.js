// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//
const licenseArray = ["Apache license 2.0", "BSD 2-clause license", "BSD 3-clause license","MIT"]
function renderLicenseBadge(license) 
{ if (license === licenseArray [0]) {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
} else if (license === licenseArray[1]){
  return  "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)]"
} else if (license === licenseArray[2]){
  return  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)]"
} else if (license === licenseArray[3]){
  return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
} else { return "" }
}
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray [0])
{ return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`}
else if  (license === licenseArray [1])
{ return `[${licenseArray[1]}](https://opensource.org/licenses/BSD-2-Clause)`}
else if  (license === licenseArray [2])
{ return `[${licenseArray[2]}](https://opensource.org/licenses/BSD-3-Clause)`}
else if  (license === licenseArray [3])
{ return `[${licenseArray[3]}](https://opensource.org/licenses/MIT)`}
else { return "" }
}
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArray[0]){
    return `Read more about ${licenseArray[0]} here:`
  } else if (license===licenseArray[1]){
    return `Read more about ${licenseArray[1]} here:`
  } else if (license===licenseArray[2]){
    return `Read more about ${licenseArray[2]} here:`
  } else if (license===licenseArray[3]){
    return `Read more about ${licenseArray[3]} here:`
  }
  else { return "" }
}
 
// TODO: Create a function to generate markdown for README

function generateMarkdown(data, githubInfo) {
  return `${data.title}**
${data.badge}



## Description 
${data.description}

## Table of contents
- [Title](#Title)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${data.license}
  
## Contributors
  ${data.contributing}

## Test
  ${data.test}

## Repository
- [Project Repo](${data.repo})

## GitHub
- [GitHub Profile](${githubInfo.profile})

`;
}

module.exports = generateMarkdown;
   


 
















  


