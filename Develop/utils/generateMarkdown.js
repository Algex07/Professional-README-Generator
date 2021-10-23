
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
