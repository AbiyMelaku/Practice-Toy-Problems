function hexToDec (hex) {
  // Write your code here, and
  // return your final answer.
  var hash = {'a' : 10,
              'b' : 11,
              'c' : 12,
              'd' : 13,
              'e' : 14,
              'f' : 15
              };
              
  var sum = 0; 
  var index = 0;
  var newNum;
  for(var i = hex.length - 1; i >= 0; i--){
    if( hex[i] === 'a' || 
        hex[i] === 'b' || 
        hex[i] === 'c' || 
        hex[i] === 'd' || 
        hex[i] === 'e' || 
        hex[i] === 'f' ){
      newNum = hash[hex[i]];
      sum += newNum * Math.pow(16, index);
    } else {
      sum+=  +hex[i] * Math.pow(16, index);
    }
    index++;
  }
   return sum;           
}