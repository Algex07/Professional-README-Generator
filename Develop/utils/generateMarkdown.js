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
function generateMarkdown(response) {
  return `
 

  #title:
  ${response.title}

  ##Table of Content
  [desscription](##description)
  [installation](##installation)
  [purpose](##purpose)
  [licenses](##licenses)
  [Github](##Github)
  [contribution](##contribution)
  [test](##test)

  ##description:
  ${response.description}
 
  ##installation:
  ${response.installation}

  ##purpose:
  ${response.purpose}

  ##licenses:
  ${response.licenses}

  ##Github:
  ${response.github}

  ##contribution:
  ${response.contribution}

  ##test:
  ${response.test}
 

  


  

`;
}

module.exports = generateMarkdown;
