/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 输入有序，所以双指针条件移动
  let l = 0,
    r = numbers.length - 1,
    sum = 0;

  while (l < r) {
    sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1];
    }

    sum < target ? l++ : r--;
  }
};
// @lc code=end
