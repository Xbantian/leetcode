/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 统计各位数字都不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  //     解题思路
  // 对于n位数，第一位有除0以外的9个数可选。
  // 对于剩余数位，每次选前面没被选的，可选数从9依次递减。
  // 当n大于0时，需要再叠加上第一位选0，相当于n-1位数的答案数。

  if (n == 0) return 1;
  let ans = 9;
  for (let i = 9; i > 10 - n; i--) {
    ans *= i;
  }
  return ans + countNumbersWithUniqueDigits(n - 1);
};
// @lc code=end
