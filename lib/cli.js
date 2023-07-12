const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

class CLI {
  constructor() {
    this.title
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'maxlength-input',
          name: 'logo',
          message: 'Please enter 3 characters for your logo',
          maxLength: 3
        },
        {
          type: 'input',
          name: 'color',
          message: 'What color would you like the characters to be?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Pick a shape',
          choices: [
            { title: 'circle', value: 'circle' },
            { title: 'triangle', value: 'triangle' },
            { title: 'square', value: 'square' }
          ]
        },
        {
          type: 'input',
          name: 'shape color',
          message: 'which color would you like for your shape?'
        }
      ])
  }
}

module.exports = CLI;
