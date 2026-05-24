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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Step 1: Find total length
        let length = 0;
        let temp = head;

        while (temp) {
            length++;
            temp = temp.next;
        }

        // Position to delete from start
        let target = length - n + 1;

        // If deleting head
        if (target === 1) {
            return head.next;
        }

        // Step 2: Traverse to target node
        temp = head;
        let prev = null;
        let cnt = 0;

        while (temp) {
            cnt++;

            if (cnt === target) {
                prev.next = temp.next;
                break;
            }

            prev = temp;
            temp = temp.next;
        }

        return head;
    }
}