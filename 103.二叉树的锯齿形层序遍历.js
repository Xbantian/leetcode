/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // 前序/中序遍历加层级反转
  const res = [];
  if (!root) return res;
  const order = (node, level) => {
    if (!res[level]) {
      res[level] = [];
    }
    res[level][level % 2 != 1 ? 'push' : 'unshift'](node.val);
    node.left && order(node.left, level + 1);
    node.right && order(node.right, level + 1);
  };
  order(root, 0);
  return res;
};
// @lc code=end
