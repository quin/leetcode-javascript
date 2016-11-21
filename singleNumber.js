function singleNumber(array) {
  var hash = {},
      len = array.length,
      i = 0;
  for (i; i < len; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }

  for (key in hash) {
    if (hash[key] === 1) {
      return parseInt(key);
    }
  }
}
