var arrayPairSum = function(nums) {
   nums = nums.sort(function(a,b){
       return a - b;
   });
  var arr = [], result = 0;
  while(nums.length){
    arr.push(nums.pop());
    if( arr.length == 2){
      result += Math.min(arr[0], arr[1]);
      arr = [];
    }
  }
  return result;
};
