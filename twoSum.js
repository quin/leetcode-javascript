var twoSum = function(nums, target) {
var hash = {};
  for (var i = 0; i < nums.length; i++) {
    var needed = target - nums[i];
    if (hash.hasOwnProperty(needed)) {
      return [hash[needed], i];
    }
    hash[nums[i]] = i;
  }
}
