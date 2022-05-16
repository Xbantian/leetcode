/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 要点：二叉搜索树，每个节点的有节点必须比左节点大
  //     算法思想
  // 根据二叉搜索树的性质

  // 如果目标节点大于当前节点值，则去右子树中删除；
  // 如果目标节点小于当前节点值，则去左子树中删除；
  // 如果目标节点就是当前节点，分为以下三种情况：
  // 其无左子：其右子顶替其位置，删除了该节点；
  // 其无右子：其左子顶替其位置，删除了该节点；
  // 其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。

  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    //key==root.val
    if (!root.right) {
      // 目标没有右节点直接返回左节点
      return root.left;
    }
    if (!root.left) {
      // 同上
      return root.right;
    }
    //目标有左右节点
    let node = root.right;
    while (node.left) {
      node = node.left;
    }
    node.left = root.left;
    root = root.right;
  }
  return root;
};
// @lc code=end
