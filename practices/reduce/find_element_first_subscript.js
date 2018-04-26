'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var result=0;
  function bubbleSort(collection) {
    　　var len = collection.length;
    　　for (var i = 0; i < len; i++) {
    　　　　for (var j = 0; j < len - 1 - i; j++) {
    　　　　　　if (collection[j] > collection[j+1]) { 
    　　　　　　　　var temp = collection[j+1]; 
    　　　　　　　　collection[j+1] = collection[j];
    　　　　　　　　collection[j] = temp;
    　　　　　　}
    　　　　}
    　　}
    　　return collection;
    }
    result=collection[element];
    return result;
}

module.exports = calculate_elements_sum;

