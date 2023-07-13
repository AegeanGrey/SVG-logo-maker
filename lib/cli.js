const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

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
    name: 'text-color',
    message: 'What color would you like the characters to be?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Pick a shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shape-color',
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
      .then(({ text, shape }) => {

        this.title = text;

        // Checks to see if the users shape selection is truthy
        if (shape === "Circle") {
            console.log(`You created a Circle with ${this.title}`)

        } else if (shape === "Triangle") {
            console.log(`You created a Triangle with ${this.title}`)

        } else if (shape === "Square") {
            console.log(`You created a Square with ${this.title}`)

        // Otherwise it will display an error to the console
        } else {
            console.error(error)
        }
      })
    }
}

module.exports = CLI;
