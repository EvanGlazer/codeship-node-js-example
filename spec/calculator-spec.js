// spec/calculator-spec.js
var calculator = require("../calculator");

describe("adding two numbers", function () {
  it("should add 2 and 3", function () {
    var product = calculator.add(2, 3);
    expect(product).toBe(5);
  });
});

describe("subtracting two numbers", function () {
  it("should subtract 5 by 2", function () {
    var product = calculator.subtract(5, 2);
    expect(product).toBe(3);
  });
});

describe("dividing two numbers", function () {
  it("should divide 9 by 3 ", function () {
    var product = calculator.divide(9, 3);
    expect(product).toBe(3);
  });
});


describe("multiplying two numbers", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });
});
