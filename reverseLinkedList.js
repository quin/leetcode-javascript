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
