/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === 0) {
      if (idx == -1) {
        idx = i;
      }
    } else {
      if (idx > -1) {
        nums[idx] = nums[i];
        nums[i] = 0;
        idx++;
      }
    }
  }
};
// @lc code=end
