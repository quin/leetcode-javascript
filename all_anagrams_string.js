var findAnagrams = function(s, p) {
  var result = [];

  pLength = p.length;
  pTotal = 0;

  for (var i = 0; i < p.length; i++) {
    pTotal += ((p[i].charCodeAt() - p.charCodeAt() + 26))
  }

  nextTotal = 0;

  for (var i = 0; i < s.length; i++) {
    var t = s.slice(i, i + pLength);

    t.split('').forEach(function(el, k) {
      nextTotal += (el.charCodeAt() - p.charCodeAt() + 26)
    })

    if (pTotal === nextTotal) {
      result.push(i)
    }

    nextTotal = 0;
  }


  return result;
};
