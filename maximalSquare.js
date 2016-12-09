/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var table = [];
  var maxSoFar = 0;
  for (var i = 0; i < matrix.length; i++) {
    //fill mirror matrix with zeros
    zeros = Array(matrix[i].length).fill(0);
    table.push(zeros);
  }

  for (var x = 0; x < matrix.length; x++) {
    for (var y = 0; y < matrix[x].length; y++) {
      table[x][y] = parseInt(matrix[x][y]); //matrix comes in strings

      // x !== 0 && y !== 0 && table[x][y] !== 0
      if (x && y && table[x][y]) {
        table[x][y] = Math.min(table[x - 1][y - 1], table[x - 1][y], table[x][y - 1]) + 1;
      }

      maxSoFar = Math.max(maxSoFar, table[x][y]);
    }
  }
  return maxSoFar * maxSoFar;
};
