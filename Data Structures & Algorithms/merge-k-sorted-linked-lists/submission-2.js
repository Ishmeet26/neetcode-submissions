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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        let res = new ListNode();
        let head = res;
        while (l1 && l2) {
            // console.log("l1 :", l1, "l2 :", l2);
            if (l1.val <= l2.val) {
                res.next = l1;
                l1 = l1.next;
            } else {
                res.next = l2;
                l2 = l2.next;
            }

            res = res.next;
        }

        if (l1) {
            res.next = l1;
        }

        if (l2) {
            res.next = l2;
        }

        return head.next;
    }
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }
        while (lists.length > 1) {
            let sortedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;

                let mergedList = this.mergeTwoLists(l1, l2);
                sortedLists.push(mergedList);
            }
            lists = sortedLists;
        }

        return lists[0];
    }
}
