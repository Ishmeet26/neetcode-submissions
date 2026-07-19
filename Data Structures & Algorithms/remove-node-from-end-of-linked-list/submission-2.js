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
        let N = 0;
        let curr = head;
        while (curr) {
            N++;
            curr = curr.next;
        }
        let prev = null;
        curr = head;
        let targetIdx = N - n + 1;
        if(targetIdx === 1){
            return head.next;
        }
        let cnt = 0;
        while (curr) {
            cnt++;

            if (cnt === targetIdx) {
                prev.next = curr.next;
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        return head;
    }
}
