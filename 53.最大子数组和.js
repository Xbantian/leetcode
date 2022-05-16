/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp维护的是以第i个为结尾的最大子序和
  let dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i] > nums[i] ? dp[i - 1] + nums[i] : nums[i];
    if (max < dp[i]) {
      max = dp[i];
    }
  }
  return max;
};
// maxSubArray([-2]);
// @lc code=end
