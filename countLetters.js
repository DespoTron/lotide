const mad = String.fromCodePoint(0x1F621);
const flame = String.fromCodePoint(0x1F525);
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`${flame}${flame}${flame} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(str) {
  let results = {};
  let noSpaces = str.split(" ").join("");
  for (const items of noSpaces) {
    if (results[items]) {
      results[items] += 1;
    } else {
      results[items] = 1;
    }
  }
  return results;
};

// Will have to get back to this problem with validation
//let check = {"l": 1, "i": 2, "g": 1, "h": 4, "t": 2, "o": 2, "u": 2, "s": 2, "e": 3, "n": 1};
//assertEquals(countLetters("lighthouse in the house"), check);
