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
    rob(root) {
        const dfs = (node) => {
            if (!node) {
                return [0, 0];
            }

            const leftPair = dfs(node.left);
            const rightPair = dfs(node.right);

            const withRoot = node.val + leftPair[1] + rightPair[1];
            const withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

            return [withRoot, withoutRoot];
        };

        const result = dfs(root);
        return Math.max(...result);
    }
}