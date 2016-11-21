var moveZeroes = function(nums) {
    i = 0;
    length = nums.lenght - 1;
    while (i < length) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            length--
        } else {
            i++
        }

    }
}
