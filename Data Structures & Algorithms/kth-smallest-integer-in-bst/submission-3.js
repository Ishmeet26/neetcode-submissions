/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        //inorder traversal using recursion
        // let count = 0;
        // let ans ;
        // function inorder(node) {
        //     if (!node) return;

        //     inorder(node.left);
        //     count++;
        //     if (count === k) {
        //         ans = node.val
        //         return ans;
        //     }

        //     inorder(node.right);
        // }

        // inorder(root);
        // return ans;

        //implementation using stack, iterative approach.

        let cnt = 0;
        let stack = [];
        let curr = root;

        while (curr || stack.length) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            cnt++;
            if (cnt === k) return curr.val;
            curr = curr.right;
        }
    }
}
