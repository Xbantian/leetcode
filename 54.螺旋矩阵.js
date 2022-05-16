/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (rect) {
  function top(rect) {
    return rect.shift().join();
  }
  function right(rect) {
    let str = '';
    rect.forEach(list => {
      str += ',' + list.pop();
    });
    return str;
  }
  function bottom(rect) {
    return rect.pop().reverse().join();
  }
  function left(rect) {
    let str = '';
    let len = rect.length;
    for (let i = len - 1; i >= 0; i--) {
      const list = rect[i];
      str += ',' + list.shift();
    }
    return str;
  }
  let str = '';
  while (rect.length && rect[0].length) {
    str += ',' + top(rect);
    if (rect.length && rect[0].length) {
      str += right(rect);
    }
    if (rect.length && rect[0].length) {
      str += ',' + bottom(rect);
    }
    if (rect.length && rect[0].length) {
      str += left(rect);
    }
  }
  return str.slice(1).split(',');
};
// @lc code=end
