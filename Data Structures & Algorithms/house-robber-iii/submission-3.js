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
        function dfs(root) {
            if (!root) {
                return [0, 0];
            }

            let leftPair = dfs(root.left);
            let rightPair = dfs(root.right);

            let withRoot = root.val + leftPair[1] + rightPair[1];
            let withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

            return [withRoot, withoutRoot];
        }

        const result = dfs(root);
        return Math.max(...result);
    }
}
