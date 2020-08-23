const flatten = function(newArr) {
  let output = [];
  for(let i = 0; i < newArr.length; i++) {
    if(Array.isArray(newArr[i])) {
      for(let j = 0; j < newArr[i].length; j++) {
        output.push(newArr[i][j]);
      }
    } else {
      output.push(newArr[i])
    }
  }
  return output
};

module.exports = flatten

