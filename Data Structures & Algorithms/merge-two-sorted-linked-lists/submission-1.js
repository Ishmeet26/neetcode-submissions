/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    merge(node, l1, l2) {
        while (l1 && l2) {
            if (l1.val < l2.val) {
                node.next = l1;
                l1 = l1.next;
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }

        if (l1) {
            node.next = l1;
        } else {
            node.next = l2;
        }
    }
    mergeTwoLists(list1, list2) {
        let res = new ListNode();
        let node = res;
        this.merge(node, list1, list2);
        console.log(res);
        return res.next;
    }
}
