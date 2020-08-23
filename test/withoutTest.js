const assert = require("chai").assert;
const without = require("../without");

describe ("#without", () => {

  it("should return [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("should return ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  const words = ["hello", "world", "lighthouse"];

  it("should return [ 'hello', 'world' ] for (words, ['lighthouse'])", () => {
    assert.deepEqual(without(words, [ "lighthouse" ]), [ "hello", "world" ]);
  });

});


// ---------------- TEST CASES ---------------

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]]
//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));