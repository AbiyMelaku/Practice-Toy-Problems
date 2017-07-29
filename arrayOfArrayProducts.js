/*Array of Array Products

Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.
=====================================================================================
Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
=====================================================================================
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer
=====================================================================================
Hints & Tips

If your peer is stuck and can’t think of anything, suggest they start with the brute force solution. Then ask how they can improve it.
If your peer cannot improve the brute force solution, ask what part of the calculations is repetitive and can be re-used.
If still no progress, ask your peer to compute manually the solution to [2, 3, 4, 5].
it’s [60, 40, 30, 24] by calculating [3*4*5, 2*4*5, 2*3*5, 2*3*4].
Help your peer by reframing the problem for them. If we think about it, the solution for every index i is simply the product of all the values to the left of index i with all the values to the right of index i.
There are, of course, no values to the left of index 0 and no values to the right of index arr.length - 1, but in these cases we can conveniently use 1 which is neutral to multiplication.
If still stuck, ask your peer how they can create these sequences based on the instructions from the previous bullets: the left values, i.e. [1, 1*2, 1*2*3, 1*2*3*4] and their complements, the right values, i.e. [3*4*5*1, 4*5*1, 5*1, 1]. Notice that it is the product of these two sequences, element by element, that gives us the desired result.
The more hints needed, the more you should reduce your peer’s rating on their problem solving skills section in the interview feedback.
Make sure you peer handles edge cases as well, such as an empty input array or an array of size 1.
Watch for forgotten indices on your peer’s solution and for unnecessary iterations.*/


/*========================
Naive Solution
=========================*/
function calcProductArray(arr){
  n = arr.length;
  if( n === 0 || n === 1 ){ return []; }
  productArr = [];
  for(var i = 0; i < n - 1; i++){
    for(var j = 0; j < n - 1; j++){
      if( i !== j ){
        product *= arr[j];
      }
    }
    productArr[i] = product;
  }
  return productArr;
}


/*========================
Improved solution
=========================*/

function calcProductArray(arr) {
  var n = arr.length;
  if( n === 0 || n === 1 ){
    return [];
  }
  var productArr = [];
  var product = 1;
  for(var i = 0; i < n; i++){
    productArr[i] = product;
    product *= arr[i];
  }
  var product = 1;
  for(i = n - 1; i >= 0; i--){
    productArr[i] *= product;
    product *= arr[i];
  }
  return productArr;
}