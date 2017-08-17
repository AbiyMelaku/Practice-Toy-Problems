// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

var productExceptSelf = function(nums) {
    var zeroCount = 0;
    var products = nums
    .filter(function (num) {
        if (num === 0) zeroCount++;
        return num !== 0;
    })
    .reduce(function (prev, curr) {
        return prev * curr;
    }, 1);
    return nums
    .map(function (num) {
        if (zeroCount >= 2) {
            return 0;
        }
        if (zeroCount === 1) {
            return num === 0 ? products : 0;
        }
        return products / num;
    });
};