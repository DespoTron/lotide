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

// -------------- TESTING FUNCTION ------------

//const a = [1,2,3];
//const b = [1,2,3];
//const c = [4,5,6];
//const d = [7,8,9];
//console.log(assertArraysEqual(a, b));
//console.log(assertArraysEqual(c, d));