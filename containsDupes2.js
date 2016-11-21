function containsNearbyDuplicate(nums, k) {
    if (nums.length === 1) { return false };
    var hash = {};
    var found = false;
    for (var i = 0; i < nums.length; i++) {
        cur = nums[i];
        if (hash[cur] === undefined) {
            hash[cur] = i;
        } else if (hash.hasOwnProperty(cur)) {
             if (Math.abs(hash[cur] - i) <= k ) {
                found = true;
            } else if (hash[cur] < i) {
                hash[cur] = i;
            }
        }
    }

    return found
}
