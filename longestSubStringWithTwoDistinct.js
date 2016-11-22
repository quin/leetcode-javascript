/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    i = 0;
    j = 0;
    longest = 0;
    uniq = 0;
    var hash = {};

    while (j < s.length) {
        cur = s[j]
        if (!hash[cur]) {
            uniq++
            hash[cur] = 1;
        }
        else {
            hash[cur] += 1;
        }

    if (uniq > 2) {
        startCur = hash[s[i]];

        if (startCur === 1) {
            delete hash[s[i]];
            uniq--
        } else {
            hash[s[i]] -= 1;
        }
        i++
    }

     longest = Math.max(longest, j - i + 1);
     j++

    }

    return longest;

};
