var minDepth = function(root) {
  if (!root) return 0
  var L = minDepth(root.left), R = minDepth(root.right)
  return 1 + (Math.min(L, R) || Math.max(L, R))

};
