/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let idx = binarySearch(nums, target);
  if (idx == -1) {
    return [-1, -1];
  }
  let start = (end = idx);
  while (nums[start] == target) {
    start--;
  }
  while (nums[end] == target) {
    end++;
  }
  return [++start, --end];
};

const binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// @lc code=end
