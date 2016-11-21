function coin(amount, demoniations) {
  var numNways = [];
  for (var i = 0; i <= amount; i++) {
    numNways[i] = 0;
  }

  numNways[0] = 1;

  for (var j = 0; j < demoniations.length; j++) {
    var current = demoniations[j];
    for (var k = current; k <= amount; k++) {
      var leftOver = k - current;
      numNways[k] += numNways[leftOver];
    }
  }

  return numNways[amount];
}
