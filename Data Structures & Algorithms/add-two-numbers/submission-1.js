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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let l3 = new ListNode();
        let curr = l3;

        while (l1 || l2 || carry) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            let sum = v1 + v2 + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            curr.next = new ListNode(digit);
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        console.log(l3);
        return l3.next;
    }
}
