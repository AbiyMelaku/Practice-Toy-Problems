// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers.

//helper function
function replace(y){
    return y.replace(/\s/g, '');
}

//main function
var isPalindrome = function(x) {
    if( x < 0 ) {
        return false;
    }
    
    var noSpace = '';
    x = x.toString();
    noSpace = replace(x);
    noSpace = noSpace.split('').reverse().join('');
 
    return noSpace === x ? true: false;
};


//==== ALTERNATE BETTER SOLUTION ====/
const isPalindrome = (x) => {
  let num = x;
  let temp = 0;
  while (num > 0) {
    //gives the digit on the far right
    temp = temp * 10 + num % 10;
    //removes the digits to the far right
    num = Math.floor(num / 10)
  }
  return x === temp;
};
