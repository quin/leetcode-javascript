function longestPalindrome(s) {
  s = s.split('')
  var hash = {}
  var odds = 0;
  var even = 0;

  for (var i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1
      odds++;
    } else {
      delete hash[s[i]];
      odds--;
      even++;
    }
  }



  var result = 0;
  if ((even + odds) % 2 === 0 && odds > 1) {
    result = even + odds - 1
  } else {
    result = even + odds;
  }
  return result;
}


longestPalindrome('abccccdd');
