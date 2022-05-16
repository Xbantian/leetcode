/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) {
    return null;
  }
  let tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) {
      return head;
    }
  }
  let rest = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(rest, k);
  return tail;
};
function reverse(curr) {
  var prev = null;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// @lc code=end
