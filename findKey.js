const findKey = function(obj, callback) {
  if(!obj) return undefined;
  
  for(let item in obj) {
    if(callback(obj[item])) {
       return item;
    }
  }
  return undefined
}

module.exports = findKey;

