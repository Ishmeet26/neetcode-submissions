/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *          this.val = val;
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
        let slow = head;
        let fast = head.next;
        //finding the middle of the linked list to split in halves;
        while (fast && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse the second split of LL
        let second = slow.next; //head of second LL before reversing;
        slow.next = null; //setting tail of first to null
        let prev = null;
        while (second !== null) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        let first = head;
        second = prev;

        while (second !== null) {
            let tmp1 = first.next;
            let tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
}
