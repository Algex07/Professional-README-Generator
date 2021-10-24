const inquirer = require("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");
const fs = require('fs');


const questions = [
    {
        type : 'input',
        name : 'title',
        message : 'what is the title of your project?',
        
    },
    {
        type : 'input',
        name : 'description',
        message : 'Please give a description of your project?',

    },
    {
        type : 'input',
        name : 'installation',
        message : 'What installation is needed to run the application?',

    },
    {
        type : 'input',
        name : 'purpose',
        message : 'What is the main purpose of this project?',

    },
    {
        type : 'list',
        name : 'licenses',
        message : 'What licenses did you use for this application?',
        choices: ["Apache", "GNU", "Eclipse", "MIT", "None"],    
    },
    {
        type : 'input',
        name : 'contribution',
        message : 'Who contributed to this project?',

    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        Type: "input",
        name: "email",
        message: "How to connect with me?"

    },
    {   type : 'input',
        name : 'test',
        message : 'How can this application be tested?',

    },
{
        type: "input",
        name: "links",
        message: "Links for your project?",
            
}
];


function init() {
inquirer.prompt(questions).then(function(data) {
   let markdown = generateMarkdown(data)
    fs.writeFile('generateREADME.md',markdown, err => {
        console.log("Generating generateREADME.md file");
        if (err) {
            console.log(err);
        }
    })
})

}
init();

