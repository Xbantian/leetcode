/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 题解：
  // 1.从后往前找，找到第一个非递增的，设为x,那么nums[x]<nums[x-1],x-1到结尾都是递减的;
  // 2.从后往前找到第一个大于nums[x]的数与nums[x]互换
  // 3.对x后的位数倒序
  const len = nums.length;
  for (let i = len - 2; i > -1; i--) {
    const x = nums[i];
    // 步骤一
    if (x < nums[i + 1]) {
      for (let j = len - 1; j > 0; j--) {
        //   步骤二
        if (nums[j] > x) {
          [nums[j], nums[i]] = [nums[i], nums[j]];
          let l = i + 1,
            r = len - 1;
          // 步骤三
          while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++, r--;
          }
          return nums;
        }
      }
    }
  }
  return nums.reverse();
};
// @lc code=end
