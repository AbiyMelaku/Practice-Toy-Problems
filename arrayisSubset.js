/*
Array isSubset
Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.

Examples
Input                                   Output
array: [ 1, 2, 3, 4 ]   
sub: [ 2, 3, 4 ]                        true

array: [ 2, 2, 2, 3, 4 ]
sub: [ 2, 4, 3 ]                        true

array: [ 2, 3, 3, "a" ]
sub: [ 3, 3, 3, "a" ]                   false
*/

function isSubset(array, sub) {
  for (var i = 0; i < sub.length; i++) {
    var index = array.indexOf(sub[i]);
    if (index < 0) {
      return false;
    } else {
      array.splice(index, 1);
    }
  }
  return true;
}