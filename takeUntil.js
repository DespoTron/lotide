const takeUntil = function(array, callback) {
  let output = [];
  for(let item of array) {
    if(callback(item) === false) {
      output.push(item)
    } else {
      break;
    }
  } 
  return output;
};

module.exports = takeUntil;
