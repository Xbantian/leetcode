/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ans = [];
  const fun = (str, res, k) => {
    // console.log(str, res, k);
    if (k == 0) {
      if (str.length > 1 && str.slice(0, 1) == 0) {
        return;
      }
      if (str && str < 256) {
        res += '.' + str;
        ans.push(res.slice(1));
        return;
      }
    } else if (k > 0) {
      if (str[0] == 0) {
        fun(str.slice(1), res + '.0', k - 1);
      } else {
        let i = 0;
        while (i < 3 && str.length > i && str.slice(0, 1 + i) < 256) {
          fun(str.slice(1 + i), res + '.' + str.slice(0, 1 + i), k - 1);
          i++;
        }
      }
    }
  };
  fun(s, '', 3);
  return ans;
};
