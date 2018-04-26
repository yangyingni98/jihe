'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<6;i++)
  {
    sum+=collection[i];
}
return (sum/6);
}

module.exports = compute_average;