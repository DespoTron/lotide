const eqArrays = require('./eqArrays')

// function that was created for this assignment
const assertArraysEqual = function(firstArr, secondArr) {
  const mad = String.fromCodePoint(0x1F621);
  const flame = String.fromCodePoint(0x1F525);
  if(eqArrays(firstArr, secondArr)) {
    console.log(`${flame} Assertion Passed: ${firstArr} === ${secondArr}`)
  } else {
    console.log(`${mad} Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
}

module.exports = assertArraysEqual;

