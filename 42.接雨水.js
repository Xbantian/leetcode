/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 双指针，短的往里面靠
  // 移动时记录最大值，只要不是最大值，说明能装水
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }

  return res;
};
// @lc code=end
