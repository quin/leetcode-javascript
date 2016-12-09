var numIslands = function(grid) {
	if (grid.length === 0) {
		return 0;
	}

	if (grid[0].length === 0) {
		return 0;
	}

	var cluster = 0;

	for (var x = 0; x < grid.length; x++) {
		for (y = 0; y < grid[0].length; y++) {
			if (grid[x][y] === '1') {
				cluster++;
				DFS(grid, x, y, grid.length, grid[0].length);
			}
		}
	}

	return cluster;
}

function DFS(grid, x, y, length, length2) {
	if (x >= length || y >= length2 || x < 0 || y < 0) {
		return;
	}

	if (grid[x][y] === '1') {
		grid[x][y] = '0';
		DFS(grid, x - 1, y, length, length2);
		DFS(grid, x, y - 1, length, length2);
		DFS(grid, x + 1, y, length, length2);
		DFS(grid, x, y + 1, length, length2);
	}
}
