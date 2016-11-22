/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var j = height.length - 1;
  var i = 0;
  var max = 0;
  while (i < j) {
    max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return max;
};

 
