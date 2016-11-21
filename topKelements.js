var topKFrequent = function(nums, k) {

    var hash = {};
    var sortedObjs = [];


    for(var i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }

  for(var key in hash){
    if(hash.hasOwnProperty(key)){
      sortedObjs.push({
        num: key, count: hash[key]
      });
    }
  }

  //sorts descending order by object's 'count' value
  sortedObjs.sort(function(a,b){
    return b.count - a.count;
  })

  return sortedObjs.slice(0, k).map((answer) => {
      return parseInt(answer.num);
  })
}
