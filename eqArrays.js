const eqArrays = function(myArr, myArrTwo) {
  if(myArr.length !== myArrTwo.length) return false;

  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArrTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

