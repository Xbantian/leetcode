/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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

// var levelOrder = function(root) {
//层序遍历 队列加循环判断
//   if (!root) {
//     return [];
//   }
//   const queue = [],
//     res = [];
//   queue.push(root);
//   while (queue.length) {
//     res.push([]);
//     const len = queue.length;
//     for (let i = 0; i < len - 1; i++) {
//       const node = queue.shift();
//       res[res.length - 1].push(node.val);
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//     }
//   }
//   return res;
// };
var levelOrder = function (root) {
  const result = [];
  // 前序遍历或中序遍历+层级判断
  const traverse = (node, layer) => {
    if (node !== null) {
      result[layer] ? result[layer].push(node.val) : (result[layer] = [node.val]);
      traverse(node.left, layer + 1);
      traverse(node.right, layer + 1);
    }
  };
  traverse(root, 0);
  return result;
};

// @lc code=end
