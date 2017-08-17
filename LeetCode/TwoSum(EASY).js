// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,

/*LOGIC to my solution:

1.  Walk through the array saving off what the current entry would need to fulfill the target and the current index in the array
2.  As you walk the array if you find a previously saved entry is looking for the current array value then you have found the match.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var container = {};
    var pointer;
    for(var i = 0; i < nums.length; i++){
        pointer = nums[i];
        if( container[pointer] !== undefined ) {
            return [container[pointer], i]
        } else {
            container[target - pointer] = i;
        }
    }
    return [];
};

/* SLIGHTLY DIFFERENT SOLUTION*/

var twoSum = function(nums, target){
    var saved = {};
    var result = [];
    for(var i = 0; i< nums.length; i++){
      if( saved.hasOwnProperty(nums[i]) ){
        result[0] = saved[nums[i]] + 1;
        result[1] = i + 1;
        return result;
      }
      saved[target - nums[i]] = i;
    }
};