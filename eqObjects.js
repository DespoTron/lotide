const eqArrays = require('./eqArrays');
//const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;
