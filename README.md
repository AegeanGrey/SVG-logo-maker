# SVG-logo-maker

![logo](https://github.com/AegeanGrey/SVG-logo-maker/assets/125229624/f777ea4c-5230-4181-80a8-974c79558b10)

## Requirements
- Git/Gitbash
- Code Editor (Ex: VS Code)
- Node.js

## Installation
To pull the environment onto your side you can do the following:

1.) Copy the SSH or HTTPS Key for the Repository by selecting the green "Code" button

2.) Go to Git or GitBash to clone the repo by entering the following into the command terminal:

git clone git@github.com:profile-name/repo-name.git

or in this case for this particular repo:

git@github.com:AegeanGrey/SVG-logo-maker.git

3.) navigate to the file path and type the following to open the code:

`code .`

We will then need to install the required packages/modules for the README Generator to work:

4.) In the Code Editor, right click on the 'index.js' file and select 'Open in Integrated Terminal'

5.) In the Terminal, type in the following to install the required packages:

`npm i`

## Usage
1.) Type the following into the Terminal to run the application:

- `node index.js` to start the application

2.) You will then be asked the following questions within the terminal that each requires a proper response:

- `Please enter 3 characters for your logo`: there is a character limit of 3 characters
- `What color would you like the characters to be?`: you can enter a color or a hexidecimal number value
- `Pick a shape`: You have the options of `Circle`, `Triangle` or `Square`
- `Which color would you like for your shape?`: can also be any color or a hexideimal number value

3.) If done correctly it will then confirm your selections and generate a `logo.svg` file within the `dist` folder, simply right click on the `logo.svg` file and select `Open with Live Server` to see your newly generated logo! 

## Credits 
This application was built from scratch by AegeanGrey/Todd D.

## License
MIT License

Copyright (c) 2023 Todd D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
