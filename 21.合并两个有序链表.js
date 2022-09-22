/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  var head = tail = new ListNode(0)
  while(list1 !== null && list2 !== null) {
    if(list1.val < list2.val) {
      tail.next = list1
      tail = tail.next
      list1 = list1.next
    }else {
      tail.next = list2
      tail = tail.next
      list2 = list2.next
    }
  }

  if(list1 === null) {
    tail.next = list2
  }

  if(list2 === null) {
    tail.next = list1
  }
  return head.next
};
// @lc code=end

