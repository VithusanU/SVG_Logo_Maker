const inquirer = reqwuire('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown');

const questions = [{
    
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
}, 
{
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project explaining the what, why and how.',
},
{
    type: 'checkbox',
    name: 'TableOfContents',
    message: 'What sections do you want to include in the Table of Contents?',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Questions'],
},
{
    type:'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
},
{
    type: 'input',
    name: 'Usage',
    message: 'Provide Instructions and examples for use.',
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your project',
    choices: ['MIT', 'ISC', 'PDDL', 'Zlib'],
},
{
    type: 'input',
    name: 'github',
    message: 'What is your Github Username?',
},
{
    type: 'email',
    name: 'email',
    message: 'What is your email?',
},
{
    type: 'confirm',
    name: 'authorsNote',
    message: 'Do you want to add footnotes?',
}];
//This is a function that writes to the ReadMe file
function writeToFile(filename, data) {
    fs.writeFile(filename,data, (err) =>
    err? console.error(err): console.log('The readMe has been successfully created'));
}


//Create a function to intialize the app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const data = markdown(answers);
        writeToFile('README.md', data);
    });
}

init();