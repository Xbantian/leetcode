/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 对于第i个位置，先判断能不能到，再算这个长度为i的数组最多能跳多远
  // 计算跳的次数
  let end = 0;
  let maxPosition = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    //找能跳的最远的
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if (i == end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};
// @lc code=end
