// function renderLicenseBadge(license) {
//   if (license === "Apache 2.0"){
//     return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
//   } else if (license === "GNU"){
//     return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
//   } else if (license === "MIT"){
//     return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
//   } 
//   return ("")
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "Apache 2.0"){
//     return `https://opensource.org/licenses/Apache-2.0`;
//   } else if (license === "GNU"){
//     return `https://www.gnu.org/licenses/gpl-3.0`;
//   } else if (license === "MIT"){
//     return `https://opensource.org/licenses/MIT`;
//   } 
//   return ("");
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === "None"){
//     return "";
//   }
//   return `## License`;
// }

// //function for links/images section
// function imagesAndLinks(links){
//   if (links === "yes"){
//     return `## Links`;
//   } else if (links === "no"){
//   return ("");
// }
// }




function generateMarkdown(response) {
  return `
 

  #title:
  ${response.title}

  

  ##Table of Content
  * [desscription](##Description)
  * [installation](##Installation)
  * [purpose](##Purpose)
  * [licenses](##Licenses)
  * [Github](##Github)
  * [contribution](##Contribution)
  * [test](##Test)
  * [links](## Links)

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

  ## If any questions connect with me:
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
