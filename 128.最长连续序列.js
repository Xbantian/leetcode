/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // hash map记录遍历过的值，每次只更新连续区域的左右边
  let max = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n]) {
      continue;
    }
    const l = map[n - 1] || 0;
    const r = map[n + 1] || 0;

    const len = l + r + 1;
    map[n - l] = len;
    map[n] = len;
    map[n + r] = len;
    max = Math.max(max, len);
  }
  return max;
};
// @lc code=end
