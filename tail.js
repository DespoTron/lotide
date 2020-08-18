// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const tail = function(myArr) {
  let newArr = [];
  newArr = myArr.slice(1);
  return newArr;
};

const a = [1,2,3];
console.log(tail(a));
console.log(a);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEquals(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEquals(result, ["Lighthouse", "Labs"]); // => will always fail!