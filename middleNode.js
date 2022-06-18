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

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))

var middleNode = function (head) {
  const nodeMap = {}
  let count = 0
  while (head !== null) {
    count ++
    nodeMap[count] = head
    head = head.next
  }
  let target = 0
  if (count % 2 === 0) {
    target = (count / 2) + 1
  } else {
    target = Math.ceil(count / 2)
  }
  return nodeMap[target]
};

middleNode(list)

var middleNode = function (head) {
  let slow = head
  let fast = head
  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};