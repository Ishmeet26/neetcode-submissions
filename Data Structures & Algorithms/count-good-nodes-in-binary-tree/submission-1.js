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

        function dfs(node, maxVal) {
            if (!node) return 0;
            let res = node.val >= maxVal ? 1 : 0;

            maxVal = Math.max(maxVal, node.val);
            res += dfs(node.left, maxVal);
            res += dfs(node.right, maxVal);
            return res;
        }

        return dfs(root, root.val);
    }
}
