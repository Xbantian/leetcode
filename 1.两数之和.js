/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let x = {};
  for (let i = 0; i < nums.length; i++) {
    if (x[nums[i]] || x[nums[i]] === 0) {
      return [x[nums[i]], i];
    }
    x[target - nums[i]] = i;
  }
};
// @lc code=end
