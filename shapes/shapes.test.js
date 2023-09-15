const shape = require("./shapes");

describe("ShapeTests", () => {
  
  // Circle tests
  test("Circle returns the correct text", () => {
    const testShape = new shape.Circle('ABC', 'red', 'blue');
    let result = testShape.text == 'ABC';

    expect(result).toEqual(true);
  });

  test("Circle returns the correct text color", () => {
    const testShape = new shape.Circle('ABC', 'red', 'blue');
    let result = testShape.colorText == 'red';

    expect(result).toEqual(true);
  });

  test("Circle returns as the correct shape color", () => {
    const testShape = new shape.Circle('ABC', 'red', 'blue');
    let result = testShape.colorShape == 'blue';

    expect(result).toEqual(true);
  });

  test("Returns Circle w/ text, text color, and shape color", () => {
    const testShape = new shape.Circle('ABC', 'red', 'blue');
    let result = testShape.render() == `<circle cx="150" cy="100" r="95" height="100%" width="100%" fill="blue" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="red">ABC</text>`;

    expect(result).toEqual(true);
  });

  // Triangle tests
  test("Triangle returns the correct text", () => {
    const testShape = new shape.Triangle('ARG', 'white', 'black');
    let result = testShape.text == 'ARG';

    expect(result).toEqual(true);
  });

  test("Triangle returns the correct text color", () => {
    const testShape = new shape.Triangle('ARG', 'white', 'black');
    let result = testShape.colorText == 'white';

    expect(result).toEqual(true);
  });

  test("Triangle returns as the correct shape color", () => {
    const testShape = new shape.Triangle('ARG', 'white', 'black');
    let result = testShape.colorShape == 'black';

    expect(result).toEqual(true);
  });

  test("Returns Triangle w/ text, text color, and shape color", () => {
    const testShape = new shape.Triangle('ARG', 'white', 'black');
    let result = testShape.render() == `<polygon height="100%" width="100%" points="20,200 275,200 150,10" fill="black" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">ARG</text>`;

    expect(result).toEqual(true);
  });

  // Square tests
  test("Square returns the correct text", () => {
    const testShape = new shape.Square('Dot', 'purple', 'pink');
    let result = testShape.text == 'Dot';

    expect(result).toEqual(true);
  });

  test("Square returns the correct text color", () => {
    const testShape = new shape.Square('Dot', 'purple', 'pink');
    let result = testShape.colorText == 'purple';

    expect(result).toEqual(true);
  });

  test("Square returns as the correct shape color", () => {
    const testShape = new shape.Square('Dot', 'purple', 'pink');
    let result = testShape.colorShape == 'pink';

    expect(result).toEqual(true);
  });

  test("Returns Square w/ text, text color, and shape color", () => {
    const testShape = new shape.Square('Dot', 'purple', 'pink');
    let result = testShape.render() == `<rect x="90" y="40" width="150" height="150" fill="pink" /><text x="165" y="130" font-size="60" text-anchor="middle" fill="purple">Dot</text>`;

    expect(result).toEqual(true);
  });
});
