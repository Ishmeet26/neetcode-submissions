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
    inorderTraversal(root) {
        const res = [];

        const InOrder = (node) => {
            if (node === null) {
                return;
            }

            
            InOrder(node.left);
            res.push(node.val);
            InOrder(node.right);
        };

        InOrder(root);
        return res;
    }
}
