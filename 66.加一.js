/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  digits[len - 1] += 1;
  for (let i = len - 1; i >= 0; i--) {
    const element = digits[i];
    if (element >= 10) {
      digits[i] = element % 10;
      if (i == 0) {
        digits.unshift(1);
      } else {
        digits[i - 1]++;
      }
    } else {
      return digits;
    }
  }
  return digits;
};
// @lc code=end
