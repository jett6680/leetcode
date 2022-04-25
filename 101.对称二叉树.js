/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const leftStack = []
  const rightStack = []
  leftStack.push(root)
  rightStack.push(root)

  while(leftStack.length && rightStack.length) {
    const leftNode = leftStack.pop()
    const rightNode = rightStack.pop()

    if(leftNode.val !== rightNode.val) {
      return false
    }

    if(leftNode.left && rightNode.right) {
      leftStack.push(leftNode.left)
      rightStack.push(rightNode.right)
    }
    if(leftNode.right && rightNode.left) {
      leftStack.push(leftNode.right)
      rightStack.push(rightNode.left)
    }
    
    if(leftNode.left && !rightNode.right || !leftNode.left && rightNode.right) {
      return false
    }
    if(leftNode.right && !rightNode.left || !leftNode.right && rightNode.left) {
      return false
    }
  }
  return leftStack.length === 0 && rightStack.length === 0
};
// @lc code=end
