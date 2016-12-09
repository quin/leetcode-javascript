/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            count++;
            continue
        } else if (count > 0) {
            result.push(formatString(nums[i - count], nums[i]));
            count = 0;
        } else if (nums[i + 1] === undefined || nums[i] + 1 !== nums[i + 1]) {
            result.push(nums[i].toString())
        }
    }
    return result
};

function formatString(start, end) {
    return start + '->' + end
}
