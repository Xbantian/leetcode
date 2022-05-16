/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0,
    max = x,
    current = x / 2;

  while (Math.floor(max) !== Math.floor(min)) {
    const res = current * current;
    if (res > x) {
      max = current;
      current = min + (current - min) / 2;
    } else if (res < x) {
      min = current;
      current = current + (max - current) / 2;
    } else {
      return Math.floor(current);
    }
  }
  return Math.floor(current);
};
// @lc code=end
