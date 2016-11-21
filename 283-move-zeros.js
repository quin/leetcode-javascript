function moveZeros(nums) {
  var length = nums.length;
  for (var i = length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      temp = nums.splice(i, 1);
      nums.push(temp[0]);
    }
  }
  return nums;
}

// one way


function moveZero(nums) {
  var i = 0;
  var length = nums.length;
  while (i < length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 0)[0]);
      length--
    } else {
      i++
    }
  }
}


//
function moveZeros(nums) {
var i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
    i++
  }
  return nums
}


function moveZeros(nums) {
  var i = 0;
  var j = nums.length - 1;
  while (i < j) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i = 0;
      i++;
    } else{
      i++
    }
  }
  return nums;
}


function moveZeros(nums) {

}
