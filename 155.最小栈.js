/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.stack = []
};

MinStack.prototype.parentIndex = function(index) {
  return Math.floor((index - 1) / 2)
};

MinStack.prototype.leftChildIndex = function(index) {
  return 2 * index + 1
};

MinStack.prototype.rightChildIndex = function(index) {
  return 2 * index + 2
};

MinStack.prototype.shiftUp = function (index) {
  while (index >= 0 && this.stack[this.parentIndex(index)] > this.stack[index]) {
    let temp = this.stack[this.parentIndex(index)]
    this.stack[this.parentIndex(index)] = this.stack[index]
    this.stack[index] = temp
    index = this.parentIndex(index)
  }
}

MinStack.prototype.shiftDown = function (index) {
  while (this.leftChildIndex(index) < this.stack.length) {
    let i = this.leftChildIndex(index)
    // 找出左右两个孩子中最小的那个孩子的索引
    if (i + 1 < this.stack.length && this.stack[i + 1] < this.stack[i]) {
      i = this.rightChildIndex(index)
    }

    if (this.stack[index] < this.stack[i]) {
      break
    }

    const temp = this.stack[index]
    this.stack[index] = this.stack[i]
    this.stack[i] = temp

    index = i
  }
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.shiftUp(this.stack.length - 1)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(this.stack.length === 0) {
    return
  }
  const temp = this.stack[0]
  this.stack[0] = this.stack[this.stack.length - 1]
  this.stack[this.stack.length - 1] = temp
  this.stack.pop()
  this.shiftDown(0)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[0]
};

// const obj = new MinStack()
// obj.push(-2)
// obj.push(0)
// obj.push(-3)

// console.log(obj.getMin())
// console.log(obj.pop())
// console.log(obj.top())
// console.log(obj.getMin())

const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-1)

console.log(obj.getMin())
console.log(obj.top())
console.log(obj.pop())
console.log(obj.getMin())

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

