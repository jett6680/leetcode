/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root
  }
  const queue = [root]
  let prev = null
  while (queue.length) {
    const node = queue.pop()
    node.next = prev
    if (node.right) {
      queue.unshift(node.right)
    }
    if (node.left) {
      queue.unshift(node.left)
    }
    prev = node
  }

  function removeRight(node) {
    node.next = null
    if(node.right) {
      removeRight(node.right)
    }
  }
  removeRight(root)
  return root
};
// @lc code=end

