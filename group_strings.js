/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    var hash = {};
    var result = []

  for (var i = 0; i < strings.length; i++) {
    var shift = '';
    var string = strings[i];
    for (var j = 0; j < string.length; j++) {
      shift += (string[j].charCodeAt() - string.charCodeAt() + 26) % 26
      shift += '-';
    }

    if (hash[shift]) {
      hash[shift].push(string);
    } else {
      hash[shift] = [string];
    }

  }

  for (key in hash) {
    result.push(hash[key]);
  }
  return result;
};


nums = [1,10,-5,1,-100]
function p3(nums) {
  highest = lowest = nums[0];
  highest2 = lowest2 = nums[0] * nums[1];
  highest3 = highest2 * nums[2];

  for (var i = 0; i < nums.length; i++) {
    current = nums[i];
    highest3 = Math.max(highest3, highest2 * current, lowest2 * current);
    highest2 = Math.max(highest2, highest * current, lowest * current);
    lowest2 = Math.min(lowest2, highest * current, lowest * current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highest3

}

p3(nums)
