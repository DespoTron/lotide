const eqArrays = function(myArr, myArrTwo) {
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArrTwo[i]) {
      return false;
    }
  }
  return true;
};
// function that was created for this assignment
const assertArraysEqual = function(firstArr, secondArr) {
  const mad = String.fromCodePoint(0x1F621);
  const flame = String.fromCodePoint(0x1F525);
  if (eqArrays(firstArr, secondArr)) {
    console.log(`${flame} Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`${mad}$ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};


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

// ----------------- TEST CASES -----------

//console.log(middle([1])); // returns []
//console.log(middle([1,2])); // returns []
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log(middle([1, 2, 3, 4])) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//console.log(assertArraysEqual(middle([1]), [])) should return true
//console.log(assertArraysEqual(middle([1, 2]), [])) should return true
//console.log(assertArraysEqual(middle([1,2,3]), [2])) should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5]), [3])) should return true
//console.log(assertArraysEqual(middle([1,2,3,4]), [2,3])) should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [3,4])) should return true
//console.log(assertArraysEqual(middle([1,2,3,4,5,6]), [2,3])) should return false
