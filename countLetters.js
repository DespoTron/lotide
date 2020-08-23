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

module.exports = countLetters;


