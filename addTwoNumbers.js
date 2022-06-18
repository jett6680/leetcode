/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  let fill = 0
  let head = tail = new ListNode(0, null)

  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0
    const l2Value = l2 ? l2.val : 0
    let currentValue = l1Value + l2Value + fill
    if(currentValue >= 10) {
      currentValue = currentValue % 10
      fill = 1
    }else {
      fill = 0
    }
    tail.next = new ListNode(currentValue, null)
    if(l1) l1 = l1.next
    
    if(l2) l2 = l2.next
    tail = tail.next
  }

  if(fill === 1) {
    tail.next = new ListNode(1, null)
  }

  return head.next
};