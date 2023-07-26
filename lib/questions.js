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
];

module.exports = questions;
