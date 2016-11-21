var maxSubArray = function(nums) {

    maxSoFar = nums[0];
    maxAtCurrentPoint = nums[0];
    for (var i = 1; i < nums.length; i++) {
      current = nums[i]
      maxAtCurrentPoint = Math.max(maxAtCurrentPoint + current, current);
      maxSoFar = Math.max(maxSoFar, maxAtCurrentPoint);
    }
    return maxSoFar
};


function lengthOfLongestSubstring(s) {
        var n = s.length
        set = {};
        ans = 0, i = 0, j = 0;
        while (i < n && j < n) {
            if (!set[s[j]]) {
                set[s[j++]]
                ans = Math.max(ans, j - i);
            }
            else {
                delete set[s[i]]
                i++
            }
        }
        return ans;
    }
}
