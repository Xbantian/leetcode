/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const fun = (res, rest) => {
    // console.log(res, rest);
    if (rest.length == 0) {
      // key: 迭代分配数字直到填完
      ans.push(res);
      //   console.log(rest, res);
      return;
    } else if (rest.length) {
      rest.forEach((x, idx) => {
        fun(
          [...res, x],
          rest.filter((xx, i) => i !== idx)
        );
      });
    }
  };
  fun([], nums);
  //   console.log(ans);
  return ans;
};
// permute([1, 0, 3]);
// @lc code=end
