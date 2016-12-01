/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    high = nums.length - 1;
    low = 0;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);

        if (nums[low] < nums[high]) {
            return nums[low];
        }

        if (nums[low] <= nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }

    }
    return nums[high]
};
