//Implement the function findKeyByValue which takes
//in an object and a value. It should scan the object
//and return the first key which contains the given value.
//If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj, value) {
  for (const item in obj) { // loop through every key in the object
    if (value === obj[item]) { // if the value === the value in the object
      return item; // return the key
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
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


