/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 后面-前一个值，但凡是正的都加起来
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      //凡是第二天大于第一天都算
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
};
// @lc code=end
