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
        const cache = new Map();
        cache.set(null, 0);

        const dfs = (root) => {
            if (cache.has(root)) {
                return cache.get(root);
            }

            let res = root.val;
            if (root.left) {
                res += dfs(root.left.left) + dfs(root.left.right);
            }
            if (root.right) {
                res += dfs(root.right.left) + dfs(root.right.right);
            }

            res = Math.max(res, dfs(root.left) + dfs(root.right));
            cache.set(root, res);
            return res;
        };

        return dfs(root);
    }
}