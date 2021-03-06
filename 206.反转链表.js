/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let newHead = null;
  while (head) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
};

var reverseList = function (head) {
  // let [pre, node] = [null, head];
  let pre = null,
    node = head;
  while (node) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
  }
  return pre;
};

// var reverseList = function(head) {
//     if (head == null || head.next == null) {
//         return head;
//     }
//     const newHead = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return newHead;
// };

// @lc code=end
