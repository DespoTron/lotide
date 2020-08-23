const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');


describe("#assertObjectsEqual", () => {
  it("should return ab === ba", () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    assert.equal(assertObjectsEqual(ab,ba));
  });
});

