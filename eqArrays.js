// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(myArr, myArrTwo) {
  if(myArr.length !== myArrTwo.length) return false;

  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArrTwo[i]) {
      return false;
    }
  }
  return true;
};

let a = [1, 2, 3];
let b = [1, 2, 3];
let d = ["1", "2", "3"];
let e = ["1", "2", "3"];
let f = ["1", "2", 3];

console.log(eqArrays(d, e));
console.log(eqArrays(e, f));
console.log(assertEquals(eqArrays(a, b), true));