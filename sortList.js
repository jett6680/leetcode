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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))))

var sortList = function (head) {
  let newHead = null
  return newHead
};

console.log(sortList(list))