const eqArrays = function(myArr, myArrTwo) {
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  const mad = String.fromCodePoint(0x1F621);
  const flame = String.fromCodePoint(0x1F525);
  if(eqArrays(firstArr, secondArr)) {
    console.log(`${flame} Assertion Passed: ${firstArr} === ${secondArr}`)
  } else {
    console.log(`${mad}$ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
}

// function for this Exercise
const letterPositions = function(sentence) {
  let results = {};
  let noSpaces = sentence.split(" ").join("");

  for(let i = 0; i < noSpaces.length; i++) { // loop through the string
    if(!results[noSpaces[i]]) { //if there are no values in the object
      results[noSpaces[i]] = [];  // set the vales to an empty array
    }
    for(let j = 0; j < noSpaces[i].length; j++) { // loop again 
      results[noSpaces[i][j]].push(i); // and push the index into the value of the objects
    }
  }

  return results;
};

console.log(letterPositions("this is this"));

//assertArraysEqual(letterPositions("hello").e, [1]);