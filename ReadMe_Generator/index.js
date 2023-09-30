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
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Test', 'Questions'],
},
{
    type:'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
}




]