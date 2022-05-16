/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = {};
  return (
    nums.findIndex((num, idx) => {
      if (hashMap[num] != undefined && idx - hashMap[num] <= k) {
        return true;
      }
      hashMap[num] = idx;
    }) !== -1
  );
};
// @lc code=end
