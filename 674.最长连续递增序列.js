/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  let max = 1,
    count = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      max = Math.max(max, ++count);
    } else {
      count = 1;
    }
  }

  return max;
};
// @lc code=end
