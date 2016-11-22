function lengthOfLongestSubstring(s) {
        var hash = {};
        var longest = 0
        var i = 0
        var j = 0;
        while (i < s.length && j < s.length) {
            if (!hash[s[j]]) {
                hash[s[j]] = true
                j++
                longest = Math.max(longest, j - i);
            }
            else {
                delete set[hash[i]]
                i++
            }
        }
        return longest;
    }
