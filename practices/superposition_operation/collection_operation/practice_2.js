'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result=[];
  var i=0;
  for(i=0;i<collection.length;i++)
  {
    var value=collection[i]*3+2;
    if(value%2!=0)
    { result.push(value);}
 }
 return result;
}

module.exports = hybrid_operation_to_uneven;

