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
      return start + end;
    }

    if (currSum <= sum) {
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
