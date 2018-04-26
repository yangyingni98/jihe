'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = collection.reduce(
    function(a,b) {
      return a.concat(b);},
      []
  )
  return result;
}
module.exports = double_to_one;
