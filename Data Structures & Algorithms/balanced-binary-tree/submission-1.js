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
        if (!root) return true;

        function dfs(node) {
            if (!node) return 0;

            let lh = dfs(node.left);
            if (lh === -1) return -1;
            let rh = dfs(node.right);
            if (rh === -1) return -1;
            if (Math.abs(lh - rh) > 1) return -1;

            return 1 + Math.max(lh, rh);
        }

        let ans = dfs(root);

        return ans === -1 ? false : true;
    }
}
