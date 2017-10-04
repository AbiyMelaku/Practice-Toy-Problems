// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function(nums) {
    var index;
    var result = [];
    for(var i = 0; i < nums.length; i++){
      //generate index using the current value
        index = Math.abs(nums[i]) - 1;
        //check if value at generated index is negative
        if( nums[index] < 0 ){
          //push value into result
            result.push(Math.abs(index + 1));
        }
        //put negative on current value
        nums[index] = -nums[index];
    }
    return result;
};

/*
The elements are between1 and N and N is the size of the array. 
Therefore we can implicitly map an element to an index i.e. 1 maps to index 0, 2 maps to index 1, ...N maps to index N-1
Say for example that the number 4 appears twice. 4 implies index 3. 
We know that there are no negative numbers in the array. 
How about I mark the number at index 3 as negative when I first encounter 4. 
Now at the next occurence of 4, I will find the position implied by it (i.e. number at index 3) as negative. 
This means that 4 is a duplicate!
Make sure you use abs(x)-1 to select the index implied by x. 
That is because, in a previous iteration, the position of x might have been marked negative.
*/