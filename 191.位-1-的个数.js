/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  n = n.toString(2);
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    const ni = n[i];
    if (ni == 1) {
      count++;
    }
  }
  return count;
};
// @lc code=end
