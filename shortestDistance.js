function shortestD(words, word1,word2) {
  found1 = -1;
  found2 = -1;
  minD = words.length;

  for (var i = 0; i < words.length; i++) {
    cur = words[i]
    if (words1 == cur) {
      found1 = i
    }

    if (words2 == cur) {
      found2 = i
    }

    if (found1 != -1 && found2 != -1) {
      minD = Math.min(minD, Math.abs(found2 - found1))
    }
  }
  return minD
}
