var ValidWordAbbr = function(dictionary) {
    this.hash = {};
    for (var i = 0; i < dictionary.length; i++) {
        var abr = `${dictionary[i][0]}${dictionary[i].length - 2}${dictionary[i][dictionary[i].length - 1]}`

        if (this.hash[abr] && this.hash[abr].indexOf(dictionary[i]) === -1) {
            this.hash[abr].push(dictionary[i])
        } else if (!this.hash[abr]) {
            this.hash[abr] = [dictionary[i]];
        }

    }

};

ValidWordAbbr.prototype.isUnique = function(word) {
  var abr = `${word[0]}${word.length - 2}${word[word.length - 1]}`


  if (!this.hash[abr]) {
      return true;
  }

  if (this.hash[abr].length === 1 && this.hash[abr][0] === word ) {
      return true;
  }

  return false;
};
