// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual(1, 5);