/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  //     贪心思想：先留下右边界最小的区间，再去除重复区间
  //   按照右边界排序，就要从左向右遍历，因为右边界越小越好，
  //只要右边界越小，留给下一个区间的空间就越大，所以从左向右遍历，优先选右边界小的
  let count = 0;
  if (intervals.length < 1) return count;
  intervals.sort((a, b) => a[1] - b[1]);

  let right = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < right) {
      count++;
    } else {
      right = intervals[i][1];
    }
  }
  return count;
};
// @lc code=end
