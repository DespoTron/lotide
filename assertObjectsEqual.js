const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Exmaple label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const key = Object.keys(object1)
  const secondKey = Object.keys(object2)

  if(key.length !== secondKey.length) {
    return false;
  }

  for(const item in object1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//assertObjectsEquals(ab, ba);
  
