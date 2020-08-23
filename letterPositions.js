const letterPositions = function(sentence) {
  let results = {};
  let noSpaces = sentence.split(" ").join("");

  for(let i = 0; i < noSpaces.length; i++) { // loop through the string
    if(!results[noSpaces[i]]) { //if there are no values in the object
      results[noSpaces[i]] = [];  // set the vales to an empty array
    }
    for(let j = 0; j < noSpaces[i].length; j++) { // loop again 
      results[noSpaces[i][j]].push(i); // and push the index into the value of the objects
    }
  }

  return results;
};

module.exports = letterPositions;
