'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[];
  var i=0; 
  for(i=0;i<collection.length;i++)
  {
    var value=collection[i];
    if(collection[i]!=collection[i+1])
    { result.push(value);}
  }
  return result;
}

module.exports = choose_no_repeat_number;
