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
  if(!root) return null 
  const queue = []
  queue.unshift(root)
  const list = []
  while (queue.length) {
    const curr = queue.pop()
    list.push(curr)
    curr.left && queue.unshift(curr.left)
    curr.right && queue.unshift(curr.right)
  }
  let nextNullNode = 1
  for(let i = 0; i< list.length -1 ; i++) {
    if((i + 1) === nextNullNode) {
      list[i].next = null
      nextNullNode = 2 * nextNullNode + 1
    }else {
      list[i].next = list[i + 1]
    }
  }

  return root
};  