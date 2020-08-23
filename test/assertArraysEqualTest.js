const assertArraysEqual = require('..//assertArraysEqual');

// -------------- TESTING FUNCTION ------------

const a = [1,2,3];
const b = [1,2,3];
const c = [4,5,6];
const d = [7,8,9];
console.log(assertArraysEqual(a, b));
console.log(assertArraysEqual(c, d));