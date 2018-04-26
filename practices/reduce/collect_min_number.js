'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var result=[];
  for(var i=0;i<5;i++)
  { result=collection[0];
    if(collection[0]>collection[i])
    result=collecton[i];
  }
  return result;
}
module.exports = collect_min_number;

