var generate = function(numRows) {
    if (numRows < 1) { return [] }
  var triangle = [[1]];
  for (var i = 0; i < numRows - 1; i++) {
      newT = [1];
      for (var j = 1; j < triangle[i].length; j++) {
          newT[j] = triangle[i][j] + triangle[i][j - 1];
      }
      newT.push(1);
      triangle.push(newT);
  }

  return triangle

};
