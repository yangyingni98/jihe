'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<9;i++)
{
  for(var j=0;j<4;j++)
{
if(collection_a[i]%collection_b[j]==0)
result.push(collection_a[i]);
}
}
return result;
}
module.exports = choose_divisible_integer;