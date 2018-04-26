'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<9;i++)
{
if(collection_b.includes(collection_a[i])!=true)
result.push(collection_a[i]);
}
return result;
}
module.exports = choose_no_common_elements;
