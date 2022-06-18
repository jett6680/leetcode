/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   const result = []
//   function fn(node) {
//     if(node === null) {
//       return
//     }

//     fn(node.left)
//     result.push(node.val)
//     fn(node.right)
//   }

//   fn(root)
//   return result
// };

var inorderTraversal = function(root) {
  const result = []
  const stack = []
  let node = root
  while (node) {
    stack.push(node)
    node = node.left
  }

  while(stack.length) {
    const top = stack.pop()
    result.push(top.val)
    node = top.right
    while (node) {
      stack.push(node)
      node = node.left
    }
  }

  return result
};

// @lc code=end

/**
 *         a
 *        /  \
 *       b    c
 *      / \  / \
 *     d   e f  g
 *    / \ / \
 *   h   ij  k
 * 
 */

