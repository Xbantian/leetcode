/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (const char of s) {
    if (obj[stack[stack.length - 1]] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
// @lc code=end
