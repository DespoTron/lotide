const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

let a = [1, 2, 3];
let b = [1, 2, 3];
let d = ["1", "2", "3"];
let e = ["1", "2", "3"];
let f = ["1", "2", 3];

console.log(assertEqual(eqArrays(a, b), true));
console.log(assertEqual(eqArrays(d, e), true))
console.log(assertEqual(eqArrays(e, f), false))