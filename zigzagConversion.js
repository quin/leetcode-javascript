/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var result = [];
    s = s.split('');
    for (var i = 0; i < numRows; i++) {
        result.push([]);
    }

    var i = 0;

    while (i < s.length) {
        for (var x = 0; x < numRows && i < s.length; x++) {
            result[x].push(s[i++])
        }

        for (var x = numRows - 2; x > 0 && i < s.length; x--) {
            result[x].push(s[i++])
        }
    }


    var string = '';
    result.map(function(s) {
        string = string.concat(s.join(''));
    });
    return string
};
