'use strict';

let args = process.argv.slice(2); // initialize command line to take arguments

function reverseString(str) { 
  let newString = ""; // create empty varible string to save our answer
  for(let i = str.length - 1; i >= 0; i--) { // loop through the string but by going backwards 
    newString += str[i]; // save the elements being looped into the newString variable
  }
  return newString; // return the final answer
}

for(let j = 0; j < args.length; j++) { // loop through the arguments provided in the command line
  console.log(reverseString(args[j])); 
}