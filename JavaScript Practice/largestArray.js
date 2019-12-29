"use strict"
function findLargest(stuff) {
    var array = stuff;
  console.log(array);

  var largest = array[0];
  console.log(largest+ " so far");
for(var i =0; i<array.length; i++){
    if(largest < array[i]){
        largest = array[i];
    }

    }
    console.log(largest + "in reality");
}


findLargest([1, -28, 88, 200, 7]);
