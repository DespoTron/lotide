const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


const ab = { a: "1", b: "2" };
const ba = { a: "1", b: "2" };
const cd = { c: "1", d: ["2", 3] };

describe("#eqObjects", () => {
  it("should return true for (ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false for (ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("should return true for (cd, dc)", () => {
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("should return false for (cd, cd2)", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});

// ------------ TESTING PRIMITIVE DATA -------------
//
//const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
//console.log(assertEqual(eqObjects(ab, ba), true)); // => true
//const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc), false)); // => false

//--------------TESTING OBJECTS WITH ARRAY VALUES--------
//const cd = { c: "1", d: ["2", 3] };
//
//console.log(assertEqual(eqObjects(cd, dc), true)); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(assertEqual(eqObjects(cd, cd2), false)); // => false