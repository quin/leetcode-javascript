//Given a singly linked list, determine if it is a palindrome.

function palindromeLinkedList(head) {
  var current = head;
  var runner = head;
  var stack = [];

  while (runner && runner.next) {
    stack.push(current.val)
    current = current.next;
    runner = runner.next.next;
  }

  if (runner) {
    current = current.next;
  }

  while (current) {
    if (stack.pop() !== current.val) {
      return false;
    }
    current = current.next;
  }

  return true;

};
