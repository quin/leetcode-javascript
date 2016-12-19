subArraySum(arr, sum) {
	for (var i = 1; i <= arr.length; i++) {
		while (curr_sum > sum && start < i - 1) {
			curr_sum = curr_sum - arr[start];
			start++:
		}

		if (curr_sum ==
	}
}

function subArraySum(arr, sum) {
	var currSum = arr[0];
	var start = 0;
	var end = 0;
	while (end < arr.length) {
    if (currSum == sum) {
      return start + end + 1;
    }

    if (currSum < sum) {
	    end++;
	    if (end < arr.length) {
				currSum = currSum + arr[end];
			}
    } else {
      currSum = currSum - arr[start];
      start++;
	  }
	}
}


 A = [100,1,2,3,-1,0,0,5,6,7], k = 5,
 // return 6 (which is the length of [1,2,3,-1,0,0])

subArraySum(A, k)

function maxSubArr(arr, k) {
	var sums = {};
	start = 0;
	best_start = 0;
	max_len = 0;
	curr_sum = 0;

	for (var i = 0; i < arr.length; i++) {
		if (hash.hasOwnProperty[curr_sum - k]) {
			if (start - sums[curr_sum -k] > max_len) 
		}
	}

}
