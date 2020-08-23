const assert = require('chai').assert
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it("should return 3 for word.length", () => {
    assert.strictEqual((words.length), 3);
  });  

  it("should return 2 for tail(words).length", () => {
    assert.strictEqual((tail(words).length), 2);
  });

  it("should return ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});