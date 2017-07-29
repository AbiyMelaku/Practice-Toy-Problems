// Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

// In your solution, try to reduce the memory usage while maintaining time efficiency. Prove the correctness of your solution and analyze its time and space complexities.

// Note: the order of the pairs in the output array doesn’t matter.

// Examples:

// input:  arr = [0, -1, -2, 2, 1], k = 1
// output: [[0, -1], [-1, -2], [2, 1], [1, 0]]

// input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
// output: []
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 0 ≤ arr.length ≤ 100
// [input]integer k

// k ≥ 0
// [output] array.array.integer

function findPairsWithGivenDifference(arr, k) {
  var arr = arr.sort(function(a,b) { return a - b; });
  var answer = [];
  var first = 0;
  var last = 1;
  while(last < arr.length && first < arr.length ){
    if( first !== last && arr[last] - arr[first] === k ) {
      answer.push([arr[first], arr[last]]);
      first++;
      last++;
    }
    else if( arr[last] - arr[first] > k ){
      first++;
    }
    else if( arr[last] - arr[first] < k ){
      last++;
    }
  }
  return answer;
}