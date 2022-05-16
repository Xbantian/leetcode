/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散法
  if (!s || s.length < 2) {
    return s;
  }
  let m,
    n,
    maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    // 奇数回文
    let site1 = getSite(i - 1, i + 1, s);
    // 偶数回文
    let site2 = getSite(i, i + 1, s);
    let [left, right] = site1[1] - site1[0] > site2[1] - site2[0] ? site1 : site2;
    if (right - left - 2 > maxLength) {
      maxLength = right - left - 2;
      n = --right;
      m = ++left;
    }
  }
  if (m == n) {
    return s[0];
  }
  return s.substring(m, n + 1);
};
const getSite = (left, right, s) => {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return [left, right];
};
// @lc code=end
