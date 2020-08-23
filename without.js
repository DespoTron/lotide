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

// function for this assignment
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = without;

