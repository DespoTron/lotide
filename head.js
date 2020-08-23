const head = function(myArr)  {
  if (!myArr) {
    return undefined;
  } else {
    return myArr[0];
  }
};

module.exports = head;