/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {
  let newHead = new ListNode(-1, head)
  let start = end = newHead

  while (n > 0) {
    end = end.next
    n--
  }

  while (end.next !== null) {
    end = end.next
    start = start.next
  }

  start.next = start.next.next
  return newHead.next
};

removeNthFromEnd(new ListNode(1, null), 1)