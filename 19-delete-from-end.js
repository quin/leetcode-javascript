// Given linked list: 1->2->3->4->5, and n = 2.

   //After removing the second node from the end, the linked list becomes 1->2->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 
var removeNthFromEnd = function(head, n) {
    if (head.next === null ) return [];

    var current = head;
    var runner = head;
    var distance = 0;

      while (distance < n && runner.next) {
          runner = runner.next;
          distance++
      }

      while (runner.next) {
          runner = runner.next
          current = current.next;
      }

    current.next = current.next.next
    return head

};
