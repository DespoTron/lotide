const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// -----------CONDITIONS --------------
// arrays with one or two elements return empty array
// arrays with odd number of elements return returns a single element
// arrays with even number of elements return 2 elements
// -----------FUNCTION MIDDLE ---------
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;

//console.log(assertArraysEqual(middle([1]), [])) //should return true
//console.log(assertArraysEqual(middle([1, 2]), [])) //should return true
//console.log(assertArraysEqual(middle([1,2,3]), [2])) //should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5]), [3])) //should return true
//console.log(assertArraysEqual(middle([1,2,3,4]), [2,3])) //should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [3,4])) //should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [2,3])) //should return false
