removeDupe = function(nums) {
  var j = 0;
  var i = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      nums.splice(i, 1);
      j++;
    } else {
      i++
    }
  }
  return nums.length;
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }
  return nums
}


function removeDupe(nums) {
  var i = 0;
  var j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
    } else {
      i++;
      j++;
    }
  }
  return nums
}
