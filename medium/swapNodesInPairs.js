/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummy = new ListNode(0, head);
  let first;
  let second;
  let prev = dummy;
  while(prev.next && prev.next.next){
      first = prev.next;
      second = first.next;
      prev.next = second;
      first.next = second.next;
      prev = second.next = first;
  }
  return dummy.next
};