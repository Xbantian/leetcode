/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // 两个要点
  // 1.滑动窗口遍历
  // 2.words中顺序无关，所以用hashmap归纳顺序
  // 优化思路：根据特性剪枝
  let hasMap = {},
    wordLength = 0,
    res = [],
    wordsLength = 0;
  if (!s.length || !words.length || !words[0].length) {
    return res;
  }
  wordLength = words[0].length;
  wordsLength = wordLength * words.length;
  if (wordsLength > s.length) {
    return res;
  }
  const setCustomMap = (obj, key) => {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
    return obj;
  };
  words.reduce(setCustomMap, hasMap);

  const isTarget = str => {
    let tempHashMap = {};
    for (let j = 0; j < words.length; j++) {
      const start = j * wordLength;
      const word = str.slice(start, start + wordLength);
      if (!hasMap[word]) {
        return false;
      }
      setCustomMap(tempHashMap, word);
      if (hasMap[word] < tempHashMap[word]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i + wordsLength <= s.length; i++) {
    isTarget(s.slice(i, i + wordsLength)) && res.push(i);
  }
  return res;
};

// @lc code=end
