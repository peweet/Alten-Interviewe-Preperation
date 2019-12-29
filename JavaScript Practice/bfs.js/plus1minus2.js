
function printRange(start, end){

 var last_move = -2
 var penultimate_move = 1
 var previous_position = -1
  var i;
  for (var i = start; i <= end; i++) {
    current_move = last_move - penultimate_move;
    current_position = previous_position + current_move;

       penultimate_move = last_move;
        last_move = current_move;
        previous_position = current_position;
    
    console.log(`Position at stage` + current_position);
  }
}

printRange(3,10);

