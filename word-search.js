/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(matrix, word) {
	for (var x = 0; x < matrix.length; x++) {
	    for (var y = 0; y < matrix[x].length; y++) {
			if (verify(x,y, matrix, 0, word)) {
				return true;
			}
		}
	}
	return false;
}

function verify(x, y, matrix, count, word) {
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length || matrix[x][y] !== word[count] || count > word.length) {
		return false;
	}

	count++
	matrix[x][y] = '#';
	if (count === word.length) {
		return true;
	}

	if (verify(x + 1, y, matrix, count, word)) {
		return true;
	}
	if (verify(x - 1, y, matrix, count, word)) {
		return true;
	}
	if (verify(x, y + 1, matrix, count, word)) {
		return true;
	}
	if (verify(x, y - 1, matrix, count, word)) {
		return true;
	}

	matrix[x][y] = word[--count];
	return false;
}
