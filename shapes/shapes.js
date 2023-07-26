// Class Shapes that takes in the users data and passes it into the subclass based on the users shape collection
class Shapes {
  constructor(text, colorText, colorShape) {
    this.text = text,
    this.colorText = colorText,
    this.colorShape = colorShape
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="95" height="100%" width="100%" fill="${this.colorShape}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
  }
}
  
class Triangle extends Shapes {
  render() {
    return `<polygon height="100%" width="100%" points="20,200 275,200 150,10" fill="${this.colorShape}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
  }
}
  
class Square extends Shapes {
  render() {
    return `<rect x="90" y="40" width="150" height="150" fill="${this.colorShape}" /><text x="165" y="130" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
  }
}

module.exports = { Circle, Triangle, Square };
