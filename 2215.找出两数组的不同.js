/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const hashMap = {};
  nums1.forEach(nx => {
    hashMap[nx] = 1;
  });
  nums2.forEach(nx => {
    if (hashMap[nx]) {
      hashMap[nx] = 2;
    }
  });

  const ans1 = [];
  const ans2 = [];
  nums1.forEach(nx => {
    if (hashMap[nx] != 2 && hashMap[nx] != 3) {
      ans1.push(nx);
      hashMap[nx] = 3;
    }
  });
  const hashMap2 = {};
  nums2.forEach(nx => {
    if (hashMap[nx] != 2 && !hashMap2[nx]) {
      ans2.push(nx);
      hashMap2[nx] = true;
    }
  });
  return [ans1, ans2];
};
// @lc code=end
