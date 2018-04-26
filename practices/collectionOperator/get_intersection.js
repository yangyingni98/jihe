'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  for(var i=0;i<5;i++)
{
  for(var j=0;j<5;j++)
{
if(collection_b[i]==collection_a[j])
result.push(collection_b[i]);
}
}
return result;
}
module.exports = get_intersection;