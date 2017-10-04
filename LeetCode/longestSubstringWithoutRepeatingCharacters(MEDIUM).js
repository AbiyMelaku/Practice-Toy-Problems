var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var str = '';
  var i = 0;
  var cache = [];
    
  while(i < s.length) {
    if( cache[s[i]] ){
      // Found a repeating character.
      if( str.length > max ){
        max = str.length;
      }

      // Not optimal: empty substring, move i back to last position, and start collecting over.
      /*str = '';
      // Move back to last non-repeating character.
      i = cache[s[i]];
      cache = [];*/

      // Optimal: strip everything up to the first repeating character in our substring, and continue on.
      var start = str.indexOf(s[i]);
      str = str.substring(start + 1);
    }

    if( i < s.length ){
      str += s[i];
      cache[s[i]] = i + 1;
      i++;
    }
  }
    
  if( str.length > max ){
    max = str.length;
  }
    
  return max;
};





/*-----------------------------------------*/
// Alternate solution
/*-----------------------------------------*/
var lengthOfLongestSubstring = function(s){
  let size = s.length;
  if( size === 0 ) return 0;
  let f = 0;
  let l = 1;
  lat array = new Int16Array(128);
  let max = 1;
  array.fill(-1);
  array[s.charCodeAt(0)] = 0;
  
  while(l < size){
    let index = array[s.charCodeAt(l)];
    if( index >= f ){ //mans need update max and f
      max = Math.max(max,(l - f));
      f = index + 1;
    }
    array[s.charCodeAt(l)] = l;
    l++;
  }
  max = Math.max(max,(l - f));
  return max;
}











