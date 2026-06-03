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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head);

        let leftPrev = dummy,
            curr = head;
        //reach curr to left posi, and leftPrev to 1 node before left posi
        for (let i = 0; i < left - 1; i++) {
            leftPrev = leftPrev.next;
            curr = curr.next;
        }

        let prev = null;
        //reverse LL
        for (let i = 0; i < right - left + 1; i++) {
            let tempNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNode;
        }

        //now attach head and tails. 

        leftPrev.next.next = curr;
        leftPrev.next = prev;

        return dummy.next;
    }
}
