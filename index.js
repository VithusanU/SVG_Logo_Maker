const fs = require('fs');
const inquirer = require('inquirer');
// This const jest essentially allows for testing using jest module 
const jest =require('jest');
const svg = require('./lib/svGenerator');




const questions = [{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters',
},
{
    type: 'input',
    name: 'textCol',
    message: 'Enter a text color keyword (OR a hexadecimal number)',
},
{
    type: 'list',
    name: 'shapeForm',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: 'shapeCol',
    message: 'Enter a shape color keyword (OR a hexadecimal number)',
}];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Successfully Generated logo.svg`);
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const data = sVg(answers);
            console.log(data);
            writeToFile('logo.svg', data);
        });
}

init();