const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const {Circle, Triangle, Square} = require('../shapes.js');
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
            userShape = new Circle(shapeColor, textColor, text);
            break;

           case "Triangle":
            console.log(log);
            userShape = new Triangle(shapeColor, textColor, text);
            break;

           case "Square":
            console.log(log);
            userShape = new Square(shapeColor, textColor, text);
            break;
        }
      })
    }
}

module.exports = CLI;
