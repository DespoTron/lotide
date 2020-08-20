const takeUntil = function(array, callback) {
  let output = [];
  for(let item of array) {
    if(callback(item) === false) {
      output.push(item)
    } else {
      break;
    }
  } 
  return output;
};



// EXPECTED INPUT
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ['I\'ve', "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// EXPECTED OUTPUT
//[ 1, 2, 5, 7, 2 ]
//---
//[ 'I've', 'been', 'to', 'Hollywood' ]
const assertArraysEqual = function(actual, expected) {
  const mad = String.fromCodePoint(0x1F621);
  const flame = String.fromCodePoint(0x1F525);
  if(eqArrays(actual, expected)) {
    console.log(`${flame} Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`${mad}$ Assertion Failed: ${actual} !== ${expected}`);
  }
}
const eqArrays = function(myArr, myArrTwo) {
  if(myArr.length !== myArrTwo.length) return false;

  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArrTwo[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
