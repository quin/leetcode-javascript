There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.


/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  var graph = {};
  words.forEach(function(word) {
    word.split('').forEach(function(ch) {
      graph[ch] = new Set();
    });
  });

  words.reduce(function(prev, current) {
    for (var i = 0; i < Math.min(prev.length, current.length); i++) {
      if (prev[i] !== current[i]) {
        graph[prev[i]].add(current[i]);
        break;
      }
    }
    return current;
  });

  var marked = {};
  var visted = {};
  var str = '';
  var hasCycle = false;

  Object.keys(graph).map(visit);

  return hasCycle ? '' : str;

  function visit(n) {
    if (marked[n]) {
      return;
    }

    if (visted[n]) {
      hasCycle = true;
      return;
    }

    visted[n] = true;
    graph[n].forEach(visit);
    marked[n] = true;
    str = n + str;
  }
};
