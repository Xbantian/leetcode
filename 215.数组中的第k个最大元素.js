/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快排思路参见912；
  // 用快排加 删减不可能的分支
  const targetIdx = nums.length - k;
  const quick = (list, left, right) => {
    if (left >= right) return;
    let l = left,
      r = right,
      base = list[left];
    while (l < r) {
      while (l < r && list[r] > base) {
        r--;
      }
      if (l < r) {
        list[l++] = list[r];
      }

      while (l < r && list[l] < base) {
        l++;
      }
      if (l < r) {
        list[r] = list[l];
      }
    }
    list[l] = base;
    // 加上下面三个判断可以精确寻找，，，删减分支，没必要全排
    if (l == targetIdx) {
      return;
    }
    if (targetIdx > left - 1 && targetIdx < l) {
      quick(list, left, l - 1);
    }
    if (targetIdx > l && targetIdx < right + 1) {
      quick(list, l + 1, right);
    }
  };
  quick(nums, 0, nums.length - 1);
  return nums[targetIdx];
};

// @lc code=end
