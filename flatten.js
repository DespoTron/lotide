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
  if(eqArrays(firstArr, secondArr)) {
    console.log(`${flame} Assertion Passed: ${firstArr} === ${secondArr}`)
  } else {
    console.log(`${mad}$ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
}

const flatten = function(newArr) {
  let output = [];
  for(let i = 0; i < newArr.length; i++) {
    if(Array.isArray(newArr[i])) {
      for(let j = 0; j < newArr[i].length; j++) {
        output.push(newArr[i][j]);
        console.log(output)
      }
    } else {
      output.push(newArr[i])
    }
  }
  return output
};

const a = [1,2, [3,4], 5, [6]];
console.log(flatten(a));