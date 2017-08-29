var judgeCircle = function(moves) {
    var top = 0, left = 0;
    for(var i = 0; i < moves.length; i++){
      switch(moves[i]) {
        case 'U':
          top++;
          break;
        case 'D':
          top--;
          break;
        case 'L':
          left--;
          break;
        case 'R':
          left++;
          break;
      }
    }
    return top === 0 & left === 0;
};