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
     * @return {void}
     */
    reorderList(head) {
        //step 1: split the list in two half using slow and fast pointer

        let slow = head;
        let fast = head.next;

        while (fast && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //reversing second half
        let second = slow.next;
        let prev = null;
        slow.next = null;

        while (second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        //step 3, merge both

        let first = head;
        second = prev;
        while (first && second) {
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
