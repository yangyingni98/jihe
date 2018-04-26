'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var result;
  for(var i=0;i<5;i++)
  { 
    if(collection_a[i]!=collection_b[i])
   {result=false;}
   else
  { return true;}
  }
  return result;
}

module.exports = compare_collections;


