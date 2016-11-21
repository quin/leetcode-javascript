/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    start = 0;
    end = nums.length - 1;
    var len = nums.length;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if ((mid === 0 || nums[mid] > nums[mid - 1]) && (mid === len - 1 || nums[mid] >= nums[mid + 1])) {
            return mid;
        } else if (mid > 0 && nums[mid - 1] > nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;

        }
    }
};
