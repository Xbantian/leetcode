/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(),
    num = 0,
    n1 = l1,
    n2 = l2,
    re;

  while (n1 || n2 || num) {
    if (!re) {
      re = res;
    } else {
      re.next = new ListNode();
      re = re.next;
    }
    let t = ((n1 && n1.val) || 0) + ((n2 && n2.val) || 0) + num;
    if (t < 10) {
      re.val = t;
      num = 0;
    } else {
      re.val = t % 10;
      num = Math.floor(t / 10);
    }
    n1 = n1 ? n1.next : n1;
    n2 = n2 ? n2.next : n2;
  }
  return res;
};
// @lc code=end
