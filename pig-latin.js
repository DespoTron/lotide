'use stict';

let args = process.argv.slice(2);

// input = pig

const pigLatin = function(str) {
  let firstChar = str[0]; //saves the first character in the string (p)
  let shortedString = str.substring(1); // cuts off the first Char of the string and returns the remaining (ig)
  let latin = ""; // variable to save our answer

  for (let i = 0; i < shortedString.length; i++) { // looping through the shortened string
    latin += shortedString[i]; // saves the shorted string to latin variable (ig)
  }
  return latin + firstChar + "ay"; // returns ig + p + ay
};

let newArr = []; // create empty array to save our command line args
for (let j = 0; j < args.length; j++) { // loop through the command line args
  newArr.push(pigLatin(args[j])); // push args into new array after gonig through pigLatin function
}

console.log(newArr.join(" ")); // join method returns a concatenating of the string