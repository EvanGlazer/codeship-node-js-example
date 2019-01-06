function add(add1, add2) {
  return add1 + add2;
};

function subtract(sub1, sub2) {
  return sub1 - sub2;
};

function divide(dividend, divsor) {
  return parseFloat(dividend / divsor);
};

function multiply(multiplier1, multiplier2) {
  return multiplier1 * multiplier2;
};

module.exports = {
  add,
  subtract,
  divide,
  multiply,
}
