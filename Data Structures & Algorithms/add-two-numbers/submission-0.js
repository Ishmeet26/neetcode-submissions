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
        let res = new ListNode();
        let curr = res;
        let carry = 0;

        while (l1  || l2  || carry) {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            //calc number;
            let val = v1 + v2 + carry; // ans becomes letss say 11;
            
            //get ones and tens numbers for val and carry;

            carry = Math.floor(val / 10);
            val = val % 10;

            curr.next = new ListNode(val);

            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return res.next;
    }
}
