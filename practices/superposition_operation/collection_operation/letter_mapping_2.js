'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result=0;
  var sum=0;
  for(var i=0;i<collection.length;i++)
{
      sum+=collection[i];
      result=String.fromCharCode(97+(sum/collection.length));
    }
    return result;
}

module.exports = average_to_letter;

