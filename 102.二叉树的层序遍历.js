//给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
//
//
//
// 示例 1：
//
//
//输入：root = [3,9,20,null,null,15,7]
//输出：[[3],[9,20],[15,7]]
//
//
// 示例 2：
//
//
//输入：root = [1]
//输出：[[1]]
//
//
// 示例 3：
//
//
//输入：root = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000
//
// Related Topics 树 广度优先搜索 二叉树 👍 1255 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const stack = []
  if(root !== null) {
    stack.unshift({ level: 0, node: root })
  }
  const result = new Map()
  while (stack.length) {
    const { level, node } = stack.pop()
    if(result.has(level)) {
      const levelResult = result.get(level)
      levelResult.push(node.val)
      result.set(level, levelResult)
    }else {
      result.set(level, [node.val])
    }
    if(node.left) {
      stack.unshift({ level: level + 1, node: node.left })
    }
    if(node.right) {
      stack.unshift({ level: level + 1, node: node.right })
    }
  }
  return Array.from(result.values())
};
//leetcode submit region end(Prohibit modification and deletion)
