/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0;
  }

  const n = envelopes.length;
  // 两个纬度不好处理
  // 先固想办法定一个纬度，然后问题就变成了求最长子序列
  // 但是相同的值是放不进的，所以固定纬度时，对于相同值排序时按另一个纬度降序
  envelopes.sort((e1, e2) => {
    if (e1[0] !== e2[0]) {
      return e1[0] - e2[0];
    } else {
      return e2[1] - e1[1];
    }
  });
  let dp = [];
  for (let i = 0; i < envelopes.length; i++) {
    dp.push(1); //初始化dp[i]
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return envelopes && envelopes.length ? Math.max(...dp) : 0;
};
// @lc code=end
