/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 对于第i个位置，先判断能不能到，再算这个长度为i的数组最多能跳多远
  let step = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > step) return false;
    step = Math.max(step, nums[i] + i);
  }
  return true;
};
// @lc code=end
