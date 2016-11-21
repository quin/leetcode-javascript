var wordPattern = function(pattern, str) {
    var splitStr = str.split(' ')
    if (pattern.length !== splitStr.length) return false;
    var hash = {};
    var hash2 = {};
    for (var i = 0; i < pattern.length; i++) {
        var p = pattern[i];
        var s = splitStr[i];
        if (!hash[p]) {
            hash[p] = s;
        }

        if (!hash2[s]) {
          hash2[s] = p
        }

        if (hash[p] !== s || hash2[s] !== p) {
          return false;
        }
        //
        // if (hash[s]) {
        //
        // }
    }

    console.log(hash, '---', hash2)

    // var s = '';
    // for (var j = 0; j < pattern.length; j++) {
    //     s += hash[pattern[j]];
    // }
    // return s === splitStr.join('')
    return true;
};
