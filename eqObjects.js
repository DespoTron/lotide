const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
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
}
// ------------ TESTING PRIMITIVE DATA -------------
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
//console.log(assertEqual(eqObjects(ab, ba), true)); // => true
//const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc), false)); // => false

//--------------TESTING OBJECTS WITH ARRAY VALUES--------
//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//console.log(assertEqual(eqObjects(cd, dc), true)); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(assertEqual(eqObjects(cd, cd2), false)); // => false