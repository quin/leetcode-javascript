function expandFromMiddle(s, start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }

    return s.substring(start + 1, end);
}

var longestPalindrome = function(s) {
    var result = '';

    for (var i = 0; i < s.length; i++) {
        expanded = expandFromMiddle(s, i, i);
        if (expanded.length > result.length) {
            result = expanded;
        }

        expanded = expandFromMiddle(s, i, i + 1)
            if (expanded.length > result.length) {
                result = expanded;
            }
        }

        return result;
    }
