/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var hash = {
    'a' : true,
    'e' : true,
    'i' : true,
    'o' : true,
    'u' : true,
    'A' : true,
    'E' : true,
    'I' : true,
    'O' : true,
    'U' : true,
  }

  var s = s.split('');

  var i = 0;
  var j = s.length - 1;

  while (i < j ) {
    console.log(s[i], s[j]);
    if (hash[s[i]] && hash[s[j]]) {
      temp = s[i];
      s[i] = s[j]
      s[j] = temp;
      i++
      j--
    } else if (hash[s[j]]) {
      i++;
    } else if (hash[s[i]]) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return s.join('');
};
