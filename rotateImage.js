/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (var i = 0; i <= matrix.length - 1; i++) {
        var trackerIndex = matrix.length - 1;
        for (var j = matrix.length - 1; j >= 0; j--) {
            var current = matrix[i].pop();
            matrix[trackerIndex].unshift(current);
              trackerIndex--;
        }
    }

};
