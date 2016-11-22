/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (wordDict.size === 0) { return false }
    var found = [];
    found[0] = true
    for (var i = 0; i < s.length; i++) {
        if (found[i]) {
        for (var j = 0; j <= s.length; j++) {
            word = s.substring(i, j);
            if (wordDict.has(word)) {
                found[j] = true
            }
        }
        }

    }

    return found[s.length] === true

};
