/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var m = board.length;
    var n = board[0].length;
    var result = [];
    for (var i = 0; i < m; i++) {
        result.push([])
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var liveCells = checkIfAlive(board, i, j);
            if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
                result[i][j] = 0;
            }

            if (board[i][j] === 1 && (liveCells == 2 || liveCells == 3)) {
                result[i][j] = 1;
            }

            if (board[i][j] === 0 && liveCells === 3) {
                result[i][j] = 1;
            }
        }
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            board[i][j] = result[i][j] === undefined ? board[i][j] : result[i][j];
        }
    }
};

function checkIfAlive(board, i, j) {
    var count = 0;
    for (var k = i - 1; k <= i + 1; k++) {
        if (board[k] && board[k][j - 1] === 1) {
            count++
        }

        if (board[k] && board[k][j + 1] === 1) {
            count++
        }
    }

    if (board[i - 1] && board[i - 1][j] === 1) {
        count++;
    }

    if (board[i + 1] && board[i + 1][j] === 1) {
        count++;
    }

    return count
}
