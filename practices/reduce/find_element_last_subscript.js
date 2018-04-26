'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var result=0;
  for(var i=collection.length-1;i>=0;i--)
  {
    if(collection[i]==element)
   {result=i;
   return result;}
  }
}

module.exports = calculate_elements_sum;
