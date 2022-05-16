/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口题目:
  // 3. 无重复字符的最长子串
  // 30. 串联所有单词的子串
  // 76. 最小覆盖子串
  // 159. 至多包含两个不同字符的最长子串
  // 209. 长度最小的子数组
  // 239. 滑动窗口最大值
  // 567. 字符串的排列
  // 632. 最小区间
  // 727. 最小窗口子序列

  // 本题：
  // 确定左指针的移动条件及移动位置
  // map记录是否重复
  let maxLength = 0,
    left = 0;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    left = map[char] >= left ? map[char] + 1 : left;
    map[char] = i;
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
};
// @lc code=end
