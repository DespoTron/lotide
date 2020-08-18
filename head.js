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

//assertEquals("Lighthouse labs", "Bootcamp");
//assertEquals(1, 1);
//assertEquals("test", "test");
//assertEquals(1, 5);


const head = function(myArr)  {
  if(!myArr) {
    return undefined;
  } else {
    return myArr[0];
  }
}
assertEquals(head([5,6,7]), 5);
assertEquals(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEquals(head([]), 5);
assertEquals(head(["Hello", "Lighthouse", "Labs"]), "Labs");