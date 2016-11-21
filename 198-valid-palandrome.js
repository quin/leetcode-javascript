var isPalindrome = function(str) {
  str = str.toLowerCase().split('');
  var i = 0;
  var j = str.length - 1;
  while (i < j) {
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122 && str[j].charCodeAt() >= 97 && str[j].charCodeAt() <= 122 ) {
      // if (str[i].charCodeAt() === str[j].charCodeAt()) {
      //   console.log('match!')
      // }
    }

    console.log(str[i].charCodeAt() <= 97)
    if ((str[i].charCodeAt() <= 97) || (str[i].charCodeAt() >= 122)) {
      i++
    }
  }
  // return s.split(' ').join('').toLowerCase().split(',').join('').split(':').join('').reverse() === str;
};


var isPalindrome = function(s) {
    var pattern = /[a-z0-9]/gi;
    s = s.match(pattern);
    if (!s || s.length === 1) return true;
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i].toLowerCase() !== s[s.length - 1 -i].toLowerCase()) return false;
    }

    return true;
};


/[a-z0-9]/i
