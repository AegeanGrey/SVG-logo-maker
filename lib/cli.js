const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

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
    this.title
  }
  run() {
    return inquirer
      .prompt(questions)
    }
}

module.exports = CLI;
