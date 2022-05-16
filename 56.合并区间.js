/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 先排序再找
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [],
    x = intervals[0][0],
    y = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= y) {
      y = Math.max(y, end);
    } else {
      res.push([x, y]);
      x = start;
      y = end;
    }
  }
  res.push([x, y]);
  return res;
};
// @lc code=end
