/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
  var canConstruct = function(ransomNote, magazine) {
      var hash = {};

      var flag = true;

      for (var j = 0; j < magazine.length; j++) {
          s = magazine[j];
          if (!hash[s]) {
              hash[s] = 1;
          } else {
              hash[s]++;
          }
      }

      for (var i = 0; i < ransomNote.length; i++) {
          r = ransomNote[i];
          console.log(hash);
          if (!hash[r] || hash[r] == 0) {
              flag = false;
              break;
          } else {
              hash[r] -= 1;
          }
      }
    return flag;

  };




  function climbStairs(n) {

      if(n <= 0) return 0;
      if(n == 1) return 1;
      if(n == 2) return 2;

      one_step_before = 2;
      two_steps_before = 1;
      all_ways = 0;

      for(var i=2; i<n; i++){
      	all_ways = one_step_before + two_steps_before;
        console.log(all_ways, one_step_before, two_steps_before, 'first')
      	two_steps_before = one_step_before;
        one_step_before = all_ways;
      }
      return all_ways;
  }
