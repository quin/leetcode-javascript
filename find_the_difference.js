function findTheDiff(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  var i = 0;
  var j = 0;

  while ( j < t.length) {
    if (s[i] !== t[j]) {
      return t[j];
    }
    j++;
    i++;
  }
}

  findTheDiff('ae', 'aea')


function findTheDiff(s, t) {
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  for (var j = 0; j < t.length; j++) {
    if (!hash[t[i]]) {
      return t[i];
    } else {
      hash[t[i]]--;
    }
  }
}
