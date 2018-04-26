'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var countnumber = collection.reduce(function (result, name) { 
    if (name in result) {
      result[name]++;
    }
    else {
      result[name] = 1;
    }
    return result;

  }, {});
  return countnumber;
}
module.exports = grouping_count;
