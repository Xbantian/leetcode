/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const res = new ListNode(-1, null);
  let next = res;
  while (lists.find(list => list)) {
    let min = null,
      minIndex = -1;

    for (let i = 0; i < lists.length; i++) {
      const item = lists[i];
      if (item) {
        if (!min) {
          min = item;
          minIndex = i;
        } else if (item.val < min.val) {
          min = item;
          minIndex = i;
        }
      }
    }
    lists[minIndex] = lists[minIndex].next;
    min.next = null;
    next.next = min;
    next = min;
  }
  return res.next;
};
// @lc code=end
