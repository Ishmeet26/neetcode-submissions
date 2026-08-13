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
    postorderTraversal(root) {
        let res = [];
        const preorder = (node) => {
            if (!node || node === null) {
                return;
            }

            preorder(node.left);
            preorder(node.right);
            res.push(node.val);
        };

        preorder(root);
        return res;
    }
}
