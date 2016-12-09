var reverseList = function(head) {
  previous = null
  if (head) {
    current = head;
    while (current) {
      var temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
  }
  return previous
};



function m(n) {
	if ( n <= 0) return 1;
	return m(n - 1)
}

x = m(100)

function hi(array) {
	m = array[0];
	index = 0;
	for (var i = 1; i < array.length; i++) {
		if (array[i] < m) {
			index = i;
			m = array[i];
		}
	}
	return index;
}

[1,2,3]
