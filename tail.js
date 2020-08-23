const tail = function(myArr) {
  let newArr = [];
  newArr = myArr.slice(1);
  return newArr;
};

module.exports = tail;

