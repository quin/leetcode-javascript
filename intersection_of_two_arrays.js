function intersection(nums1, nums2) {
  var arrays = [nums1, nums2].
  arrays.sort(function(a,b) {
    a.length - b.length;
  })
  return arrays.reduce(function(intersectedArray, currentArray, i) {
    return intersectedArray.filter(function(val) {
      return currentArray.indexOf(val) !== -1;
    })
  });
}
