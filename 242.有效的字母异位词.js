/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];
    const currentT = t[i];
    hashMap[currentS] ? hashMap[currentS]++ : (hashMap[currentS] = 1);
    hashMap[currentT] ? hashMap[currentT]-- : (hashMap[currentT] = -1);
  }
  return Object.values(hashMap).every(v => v === 0);
};
// @lc code=end
