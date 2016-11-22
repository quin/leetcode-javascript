var longestOfK = function(words, k) {
  var i = 0;
  var j = 0;
  var hash = {};
  var longest = 0;
  while (j < words.length) {
    cur = words[i];
    if (!hash[cur]) {
      hash[cur] = 1;
    } else {
      hash[cur] += 1;
    }

    if (Object.keys(hash).length > k) {
      remove = words[i];

      if (hash[remove] === 1) {
        delete hash[remove];
      } else {
        hash[remove] -= 1;
        i++;
      }
    }
    longest = Math.max(longest, j - i + 1)
    j++
  }
  return longest;
}
