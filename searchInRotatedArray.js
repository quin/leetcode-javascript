var search = function(nums, target) {
    pivot = findIndex(nums);

    end = nums.length - 1;
    start = 0;
    if (target === nums[pivot]) {
        return pivot
    }

    if (target < nums[pivot]) {
        end = pivot - 1;
    } else {
        start = pivot + 1;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1
};

function findIndex(nums) {
    if (nums[0] <= nums[nums.length - 1]) return 0;
    start = 0;
    end = nums.length - 1;

    while (start <= end) {
        mid = Math.floor((end + start) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return mid + 1;
        }

        if (nums[start] <= nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
