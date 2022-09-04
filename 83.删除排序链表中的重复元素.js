/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
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
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  let currentNode = head
  while (currentNode && currentNode.next) {
    if(currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next
    }else {
      currentNode = currentNode.next
    }
  }
  
  return head
};
// @lc code=end

