'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var result=0;
  for(var i=collection.length;i>=0;i--)
  {
    if(collection[i]%2==0)
   { result=collection[i];
    return result;
  }
  }
}

module.exports = find_last_even;
