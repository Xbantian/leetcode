/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 来自题解
  // 双指针滑动窗口
  // count 表示有没被包含的目标字符
  // map记录目标字符，可以为负值（表示当前字符串多包含的目标字符数）
  // 当map中没有正数时表面已经包含全部目标
  // 之后移动左指针开始加map值，直到出现正值，此时计算字符长度，之后移动右指针
  let min = '',
    left = 0,
    right = -1,
    map = {};

  const setCustomMap = (obj, key) => {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
    return obj;
  };
  for (let i = 0; i < t.length; i++) {
    setCustomMap(map, t[i]);
  }
  let count = Object.keys(map).length;
  while (right <= s.length) {
    if (count == 0) {
      let current = s[left];
      if (map[current] != null) map[current]++;
      if (map[current] > 0) {
        count++;
        if (min == '') {
          min = s.slice(left, right + 1);
        } else {
          min = min.length < right + 1 - left ? min : s.slice(left, right + 1);
        }
      }
      left++;
    } else {
      right++;
      let current = s[right];
      if (map[current] != null) map[current]--;
      if (map[current] == 0) count--;
    }
  }
  return min;
};
// @lc code=end
