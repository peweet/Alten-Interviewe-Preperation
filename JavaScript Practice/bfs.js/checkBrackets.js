
"use strict"
function isWellformed(string){
    //var parenthesis = "[]{}()";
   var parenthesis = string;
    var i;
    var char;
    var  bracePosition;

    var stack = [];
   
    for(i = 0; char = string[i]; i++){
        
        bracePosition == parenthesis.indexOf(char);
        if(bracePosition === -1){
            continue;
        }

        if(bracePosition %2 ===0){
            stack.push(bracePosition+1);
        } else {
            if(stack.length === 0|| stack.pop() !== bracePosition){
                return false;
            }
        }
    }
        return stack.length ===0;

}

var string = ["[{()}]"];
isWellformed(string);