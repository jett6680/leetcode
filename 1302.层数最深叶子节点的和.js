/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
 */

const { node } = require("prop-types");

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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let level = 0
  function findMaxDep(node, currentLevel) {
    if(!node) {
      return
    }
    level = Math.max(level, currentLevel)
    findMaxDep(node.left, currentLevel + 1)
    findMaxDep(node.right, currentLevel + 1)
  }
  findMaxDep(root, 0)

  const stack = []
  stack.push({
    node: root,
    level: 0
  })
  let result = 0
  while (stack.length) {
    const current = stack.pop()
    if(current.level === level) {
      result += current.node.val
    }
    current.node.left && stack.push({ node: current.node.left, level: current.level + 1 })
    current.node.right && stack.push({ node: current.node.right, level: current.level + 1 })
  }
  return result
};
// @lc code=end

