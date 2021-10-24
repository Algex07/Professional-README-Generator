function generateMarkdown(response) {
  return `# ${response.title}
 

  

  #Table of Content
  * [Desscription](#description)
  * [Installation](#installation)
  * [Purpose](#purpose)
  * [Licenses](#licenses)
  * [Github](#github)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Links](#links)

  ## Description:
  ${response.description}
 
  ## Installation:
  ${response.installation}

  ## Purpose:
  ${response.purpose}

  ## Licenses:
  ${response.licenses}

  ## Github:
  ${response.github}

  ## If any questions connect with me @:
  ${response.email}

  ## Contribution:
  ${response.contribution}

  ## Test:
  ${response.test}

  ## Links:
  ${response.links}
 
 

`;
}

module.exports = generateMarkdown;
