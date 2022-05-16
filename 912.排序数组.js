/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 快排
  // 1.随便选第一个数为基准，暂存该数
  // 2.从右向左找第一个小于基准的数填入基准的位置，
  // 3.从左向右找一个大于基准的数填入第二步的位置
  // 4.循环知道两个指针指向同一个位置，
  // 5.把第一步保存的基准存入该位置，至此，基准左边的数都比基准小，右边都比机会准大
  // 6.递归调用基准左右的数组
  function quickSort(nums, left, right) {
    if (left >= right) {
      return;
    }
    let baseNum = nums[left],
      i = left,
      j = right;
    while (i < j) {
      while (i < j && nums[j] > baseNum) {
        j--;
      }
      if (i < j) {
        nums[i++] = nums[j];
      }
      while (i < j && nums[i] < baseNum) {
        i++;
      }
      if (i < j) {
        nums[j--] = nums[i];
      }
    }
    nums[i] = baseNum;
    quickSort(nums, left, i - 1);
    quickSort(nums, i + 1, right);
  }
  quickSort(nums, 0, nums.length - 1);
  return nums;
};
// @lc code=end
