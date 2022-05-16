/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 先排序再找
  points.sort((a, b) => a[0] - b[0]);
  let prevMinEnd = null,
    count = 0;

  for (let [start, end] of points) {
    if (prevMinEnd == null || prevMinEnd < start) {
      count++;
      prevMinEnd = end;
    } else prevMinEnd = Math.min(prevMinEnd, end);
  }
  return count;
};
// @lc code=end
