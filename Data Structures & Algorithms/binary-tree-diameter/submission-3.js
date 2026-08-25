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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) return null;
        let res = [0];

        function dfs(node, res) {
            if (node === null) {
                return 0;
            }
            let lh = dfs(node.left, res);
            let rh = dfs(node.right, res);

            res[0] = Math.max(res[0], lh + rh);

            return 1 + Math.max(lh, rh);
        }

        dfs(root, res);

        return res[0];
    }
}
