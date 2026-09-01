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
    goodNodes(root) {
        if (!root) return 0;
        let res = 0;

        function dfs(node, maxVal) {
            if (!node) return;

            if (node.val >= maxVal) {
                res++;
            }

            maxVal = Math.max(maxVal, node.val);

            dfs(node.left, maxVal);
            dfs(node.right, maxVal);
        }
        dfs(root, root.val);
        return res;
    }
}
