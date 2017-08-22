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

