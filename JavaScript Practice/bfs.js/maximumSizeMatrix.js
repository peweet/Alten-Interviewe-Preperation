"use strict"
function findMaxS()
{
    var matrix = [
        [0, 1, 1, 0, 1, 1],  
        [1, 1, 0, 1, 0, 0],  
        [0, 1, 1, 1, 0, 1], 
        [1, 1, 1, 1, 0, 0], 
        [1, 1, 1, 1, 1, 1], 
        [0, 0, 0, 0, 0, 0]
    ]

    var row = matrix.length;
    var column = matrix[0].length;
    var maxSquare = 0;
    var i , j, k, y;
  for( i = 0; i < row; i++){
      for( y = 0; y<column; y++){
       if(matrix[i][j] == 1) {
       var squareLength = 1;
           while(squareLength + i < rows && squareLength + j < column){
                for(k = j; k <= squareLength+ j; k++){
                    if(matrix[i+ squareLength][k] == 0){
                        break;
                    }
                }
                for( k = i; k<= squareLength +i; k ++){
                    if(matrix[k][j+squareLength] == 0){
                        break;
                    }
                    else if(matrix[k][j+squareLength] == 1) {
                        squareLength+=1;
                    }

                    if(maxSquare < squareLength){
                        maxSquare == squareLength;
                    }
                }
                
                console.log(maxSquare);
            }
         }
        }
  }
}
  findMaxS();
