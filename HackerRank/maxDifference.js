function maxDifference (a) {
  var diff = 0, left = 0, right = 0;
  //loop through input array
  for (var i = 0; i < a.length; i++) {
    //IF STATEMENT 1
    //if current value in array is less than the value at left
    if( a[i] < a[left] ) { 
      //then set left to i
      left = i; 
      //now if left is greater than right
      if( left > right ) {
        //set right to left
        right = left
      }
    }
    //IF STATEMENT 2
    //if current value in array is greater than or equal to the value at right
    if( a[i] >= a[right] ) {
      //then set right to i
      right = i;
    }
    //IF STATEMENT 3
    //calculate diff
    if( a[right] - a[left] > diff ) {
      diff = a[right] - a[left];
    }
  }
  
  console.log(diff);
  return diff;
}