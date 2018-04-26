'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result=0;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2!=0)
    {result+=collection[i];}
  }
  return (result/(collection.length/2));
}

module.exports = average_uneven;
