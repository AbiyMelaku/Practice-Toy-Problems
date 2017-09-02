function is_balanced(expression) {
  var arr = [], minOpen = 0, maxOpen = 0;
  
  //START of helper function
  function helper(message){
    for(var i = 0; i < message.length; i++){
      if( message[i] === '(' ){
        maxOpen += 1;
        if( i === 0 || message[i - 1] !== ':' ){
          minOpen += 1;
        }
      } else if( message[i] === ')' ){
        minOpen = Math.max(0, minOpen - 1);
        if( i === 0 || message[i - 1] !== ':' ){
          maxOpen -= 1;
          if( maxOpen < 0 ){
            break;
          }
        }
      }
    }
  
    if( maxOpen >= 0 && minOpen === 0 ){
        arr.push("YES");
    } else {
        arr.push("NO");
    } 
    minOpen = 0, maxOpen = 0;
  }
  // END of helper function
  
  for(var i = 0; i < expression.length; i++){
    helper(expression[i]);
  }
  return arr;
}