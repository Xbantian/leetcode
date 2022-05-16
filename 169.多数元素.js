/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    map[x] = map[x] === undefined ? 1 : map[x] + 1;
    if (map[x] > nums.length / 2) {
      return x;
    }
  }
};
// @lc code=end
