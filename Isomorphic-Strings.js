/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return evenOdds(s) === evenOdds(t)
};

function evenOdds(s) {
  var odds = 0;
  var evens = 0;

  var hash = {};
  for (var i = 0; i < s.length; i++) {
      if (!hash[s[i]]) {
          hash[s[i]] = 1;
          odds++;
      } else {
          delete hash[s[i]];
          odds--;
          evens += 2;
      }
  }

  if (odds > 0) {
    evens += 1;
  }

  return evens
}

var isIsomorphic = function(s,t) {
  var map1 = {},
      map2 = {}


    for (var i = 0; i < s.length; i++) {
      if (!map1[s[i]] && !map2[t[i]]) {
        map1[s[i]] = t[i]
        map2[t[i]] = s[i]
      } else if (map1[s[i]] != t[i] || map2[t[i]] != s[i]) {
        return false;
      }
    }
    return true;
}
