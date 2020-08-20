const findKey = function(obj, callback) {
  if(!obj) return undefined;
  
  for(let item in obj) {
    if(callback(obj[item])) {
       return item;
    }
  }
  return undefined
}


const words = {"Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 },"elBulli":{ stars: 3 },"Ora":{ stars: 2 }, "Akelarre":  { stars: 4 }};
let results = findKey(words, x => x.stars === 2) // => "noma"
//let results2 = findKey(words, x => x.stars === 1) // => "Blue Hill"
//let results3 = findKey(words, x => x.stars === 3) // => "Akaleri"
//let results4 = findKey(words, x => x.stars === 4) // => "Akelarre"
//
//console.log(results);
//
//
//const mad = String.fromCodePoint(0x1F621);
//const flame = String.fromCodePoint(0x1F525);
//const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
//  } else {
//    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
//  }
//};
//
//assertEqual(results, "noma");
//assertEqual(results2, "Blue Hill");
//assertEqual(results3, "Akaleri");
//assertEqual(results4, "elBulli");