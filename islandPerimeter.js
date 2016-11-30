function island(grid) {
  var sum = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++; // count down neighbours
        if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbours++; // count right neighbours
      }
    }
  }
  return sum;
}



grid = [[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]]
island(grid)
