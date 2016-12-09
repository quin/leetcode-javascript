/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = nums.length;
    for (var i = 0; i < nums.length; i++) {
        sum += i - nums[i];
    }
    return sum;
};
