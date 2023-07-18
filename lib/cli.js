const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const generateSVG = require('./generateSVG.js')
const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// An array of questions for the user to answer
const questions = [
  {
    type: 'maxlength-input',
    name: 'text',
    message: 'Please enter 3 characters for your logo',
    maxLength: 3
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the characters to be?',
  },
  {
    type: 'list',
    name: 'shapeSelect',
    message: 'Pick a shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'which color would you like for your shape?'
  }
]

class CLI {
  constructor() {
    this.title = '';
  }
  run() {
    return inquirer

       // Prompts the user with questions in the CLI
      .prompt(questions)

      // Takes the responses from the user
      .then(({ shapeSelect, shapeColor, textColor, text }) => {

        // Variables that save the users selection to be used later
        let userShape;
        this.title = text;

        // Console passes in the user input and tells the user their desired logo
        var log = `You want a ${shapeColor} ${shapeSelect} with ${textColor} font that says '${text}' for your logo`;

        // Switch case that will match the users shape selection
        switch (shapeSelect) {

          // Based on the users selection, it will create a new class of the desired shape and console log their selection while saving it the 'userShape' variable
           case "Circle":
            console.log(log);
            userShape = `<circle cx="150" cy="100" r="95" height="100%" width="100%" fill="${shapeColor}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
            break;

           case "Triangle":
            console.log(log);
            userShape = `<polygon height="100%" width="100%" points="20,200 275,200 150,10" fill="${shapeColor}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
            break;

           case "Square":
            console.log(log);
            userShape = `<rect x="90" y="40" width="150" height="150" fill="${shapeColor}" /><text x="165" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
            break;
        }

        // The 'userShape' is then passed into the 'generateSVG' function and the results are stored within 'fileText' variable
        const fileText = generateSVG(userShape);

        // We use the file system and utilize the writeFile method to generate the 'logo.svg' file
        fs.writeFile('./dist/logo.svg', fileText, (error) => {

            // If there is an error then it will log the console with it, otherwise it will confirm that it generated the users logo
            error ? console.error(error) : console.log(`Created logo.svg file for ${this.title} in dist folder`)
        })
      })
    }
}

module.exports = CLI;
