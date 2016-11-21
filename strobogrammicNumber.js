function isStroBro(str) {
  var hash = {
    '0':'0',
    '1':'1',
    '8':'8',
    '6':'9',
    '9':'6',
  }

  var i = 0;
  var j = str.length;
  while (i <= j) {
    if (!hash[str[i]] || hash[str[i]] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
