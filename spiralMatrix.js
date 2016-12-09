/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    var t = 0;
    var l = 0;
    var r = matrix[0].length - 1;
    var b = matrix.length - 1;
    var dir = 0;
    var result = [];

    while (l <= r && t <= b) {
        if (dir === 0) {
            for (var i = l; i <= r; i++) {
                result.push(matrix[t][i]);
            }

            t++;
        }

        if (dir === 1) {
            for (var i = t; i <= b; i++) {
                result.push(matrix[i][r]);
            }

            r--;
        }

        if (dir === 2) {
            for (var i = r; i >= l; i--) {
                result.push(matrix[b][i]);
            }

            b--;
        }

        if (dir === 3) {
            for (var i = b; i >= t; i--) {
                result.push(matrix[i][l]);
            }

            l++;
        }

        dir = (dir + 1) % 4
    }

    return result


};
