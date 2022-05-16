/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 解法一，动态规划，第i个跟前面的比，至少不会比前面的短
  // 找到可能比前面长的条件：
  // 第i个值比第j个值大
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp.push(1); //初始化dp[i]
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return nums && nums.length ? Math.max(...dp) : 0;
  // 解法二，解1中明显有多遍历的值可以优化
};
// @lc code=end
