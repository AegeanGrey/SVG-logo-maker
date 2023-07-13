class Shape {
  // const start = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="95" height="100%" width="100%" fill="${color}" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${text-color}">${text}</text>`
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="20,200 275,200 150,10" fill="${color}" />

    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${text-color}">${text}</text>`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="150" height="150" fill="${color}" />

    <text x="165" y="130" font-size="60" text-anchor="middle" fill="${text-color}">${text}</text>`
  }
}

module.exports = {Circle, Triangle, Square}
