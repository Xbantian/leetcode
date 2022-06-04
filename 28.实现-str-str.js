/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle.length) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    let x = i;
    y = 0;
    while (haystack[x] == needle[y] && y < needle.length) {
      y++;
      x++;
    }
    if (y == needle.length) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
