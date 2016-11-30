/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(array, w) {
    if (array.length === 0) { return [] }
    var result = [];
    i = 0;
    while (i < array.length - w + 1) {
        chunk = array.slice(i, w + i);
        result.push(Math.max.apply(null, chunk));
        i++
    }
  return result;
};
