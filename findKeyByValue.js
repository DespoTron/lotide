const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//Implement the function findKeyByValue which takes
//in an object and a value. It should scan the object
//and return the first key which contains the given value.
//If no key with that given value is found, then it should return undefined.

//------------Function for this Exercise-----------------
//------------One Way To Do This ------------------
const findKeyByValue = function(obj, value) {
  for (const item in obj) { // loop through every key in the object
    if (value === obj[item]) { // if the value === the value in the object
      return item; // return the key
    }
  }
  return undefined;
};

//-----------Second Way to do this using Object entries------
//const findKeyByValue = function(obj, value) {
//  const entries = Object.entries(obj);
//  for (const [key, property] of entries) {
//    if (value === property) {
//      return key;
//    }
//  }
//  return undefined;
//};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Test"))
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Test"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);