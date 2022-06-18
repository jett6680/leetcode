/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = new Array(nums.length - k + 1)
  const queue = []
  // 遍历数组中元素，right表示滑动窗口右边界
  for (let right = 0; right < nums.length; right++) {
    // 如果队列不为空且当前考察元素大于等于队尾元素，则将队尾元素移除。
    // 直到，队列为空或当前考察元素小于新的队尾元素
    while (queue.length > 0 && nums[right] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    // 存储元素下标
    queue.push(right);
    // 计算窗口左侧边界
    const left = right - k + 1;
    // 当队首元素的下标小于滑动窗口左侧边界left时
    // 表示队首元素已经不再滑动窗口内，因此将其从队首移除
    if (queue[0] < left) {
      queue.shift();
    }
    // 由于数组下标从0开始，因此当窗口右边界right+1大于等于窗口大小k时
    // 意味着窗口形成。此时，队首元素就是该窗口内的最大值
    if (right + 1 >= k) {
      res[left] = nums[queue[0]];
    }
  }
  return res;
};

const result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(result)