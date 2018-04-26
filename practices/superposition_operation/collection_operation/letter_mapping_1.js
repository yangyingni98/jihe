'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result = [];
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
{
      result.push(String.fromCharCode(97+collection[i]-1));
      
    }
    }return result;
    }
module.exports = even_to_letter;
