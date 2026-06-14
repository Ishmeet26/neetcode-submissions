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
     * @return {boolean}
     */
    isBalanced(root) {
        function checkHeight(root) {
            if (root === null) return 0;

            let lh = checkHeight(root.left);
            if (lh === -1) return -1;
            let rh = checkHeight(root.right);
            if (rh === -1) return -1;

            if (Math.abs(lh - rh) > 1) return -1;

            return 1 + Math.max(lh, rh);
        }

        const res = checkHeight(root);
        return res === -1 ? false : true;
    }
}
