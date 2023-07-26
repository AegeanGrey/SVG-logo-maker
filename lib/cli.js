const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const generateSVG = require('./generateSVG.js');
const { Circle, Triangle, Square } = require('../shapes/shapes.js');
const questions = require('./questions.js');
const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

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

          // Based on the users selection, it will create and render a new class of the desired shape and console log their selection while saving it the 'userShape' variable
           case "Circle":
            console.log(log);
            userShape = new Circle(text, textColor, shapeColor).render();
            console.log(userShape);
            break;

           case "Triangle":
            console.log(log);
            userShape = new Triangle(text, textColor, shapeColor).render();
            break;

           case "Square":
            console.log(log);
            userShape = new Square(text, textColor, shapeColor).render();
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
