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
     * @return {number[]}
     */
    preorderTraversal(root) {
        //recursively
        // const res = [];

        // const preOrder = (node) => {
        //     if (node === null) {
        //         return;
        //     }

        //     res.push(node.val);
        //     preOrder(node.left);
        //     preOrder(node.right);
        // };

        // preOrder(root);
        // return res;

        // callStack recursively while saving next node in callstack
        let res = [];
        let stack = [];
        let curr = root;

        while (curr || stack.length > 0) {
            if (curr) {
                res.push(curr.val);
                stack.push(curr.right);
                curr = curr.left;
            } else {
                curr = stack.pop();
            }
        }
        return res;
    }
}
