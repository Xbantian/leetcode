/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len1 = num1.length - 1,
    len2 = num2.length - 1,
    res = [];
  for (let i = len1; i >= 0; i--) {
    for (let j = len2; j >= 0; j--) {
      // 要点一：乘数位置的计算
      let p1 = len1 + len2 - i - j,
        p2 = p1 + 1,
        // 要点二：填结果是可能这个坑之前有数字需要加上
        sum = num1[i] * num2[j] + (res[p1] || 0);

      res[p1] = sum % 10;
      // 要点二：填结果是可能这个坑之前有数字需要加上
      res[p2] = ((sum / 10) | 0) + (res[p2] || 0);
    }
  }
  while (res[res.length - 1] == '0') res.pop();
  return res.length ? res.reverse().join('') : '0';
};
// @lc code=end
