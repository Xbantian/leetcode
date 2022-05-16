/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 注意是有序数组，相同的肯定相邻，双指针遍历
  // 直接在原数组操作
  // 返回的是新数组长度
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[idx]) {
      nums[++idx] = nums[i];
    }
  }
  return ++idx; // 返回的是长度
};
// @lc code=end
