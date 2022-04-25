//用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的
//功能。(若队列中没有元素，deleteHead 操作返回 -1 )
//
//
//
// 示例 1：
//
// 输入：
//["CQueue","appendTail","deleteHead","deleteHead"]
//[[],[3],[],[]]
//输出：[null,null,3,-1]
//
//
// 示例 2：
//
// 输入：
//["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
//[[],[],[5],[2],[],[]]
//输出：[null,-1,null,null,5,2]
//
//
// 提示：
//
//
// 1 <= values <= 10000
// 最多会对 appendTail、deleteHead 进行 10000 次调用
//
// Related Topics 栈 设计 队列 👍 499 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

var CQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  for(let i = 1; i< this.stack1.length; i++) {
    this.stack2[i - 1] = this.stack1[i]
  }
  const removed = this.stack1[0] ? this.stack1[0] : -1
  this.stack1 = []
  for (let i = 0; i< this.stack2.length; i++) {
    this.stack1[i] = this.stack2[i]
  }
  this.stack2 = []
  return removed
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
//leetcode submit region end(Prohibit modification and deletion)
